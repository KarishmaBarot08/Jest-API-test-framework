const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '../config.js');

/**
 * Updates the data in the config.js file for string values.
 *
 * @param {string} key - The key to be updated.
 * @param {string} value - The new string value for the key.
 */
function updateStringConfigItem(key, value) {
    // Read the existing config as a string
    let configContent;
    try {
        configContent = fs.readFileSync(configPath, 'utf-8');
    } catch (err) {
        console.error('Error reading config.js:', err);
        return; // Exit if config cannot be read
    }

    // Format the value
    const formattedValue = `'${value}'`;

    // Regular expression to find the specific key and update its value
    const regex = new RegExp(`(${key}:\\s*)(['"]?)([^'";]+)(['"]?)(,?)`, 'g');

    // Replace the specified key value while preserving structure
    let updatedConfigContent = configContent.replace(regex, `$1${formattedValue}$5`);

    // Ensure the proper structure of the config file
    updatedConfigContent = updatedConfigContent.replace(/,\s*([}])(\s*module\.exports = config;)/, '$1$2');

    // Write the updated content back to config.js
    try {
        fs.writeFileSync(configPath, updatedConfigContent, 'utf-8');
        //console.log('Config.js updated successfully for string value!');
    } catch (err) {
        console.error('Error writing to config.js:', err);
    }
}

function updateNumberConfigItem(key, value) {
    // Step 1: Read the current config.js content as a string
    let configContent = fs.readFileSync(configPath, 'utf-8');

    //console.log(`Original config.js content:\n${configContent}`);

    // Step 2: Construct a regular expression to find the key and its associated value
    const regex = new RegExp(`${key}:\\s*\\d+`, 'g');

    // Step 3: Check if the key exists in the file and replace its value
    if (regex.test(configContent)) {
        // Replace the old value with the new one
        configContent = configContent.replace(regex, `${key}: ${value}`);

        // Step 4: Write the updated content back to the config.js file
        fs.writeFileSync(configPath, configContent, 'utf-8');

        //console.log(`${key} updated to ${value} in config.js`);
    } else {
        console.log(`Key ${key} not found in config.js`);
    }

    // Step 5: Read and log the updated file content to verify the changes
    const updatedContent = fs.readFileSync(configPath, 'utf-8');
    //console.log(`Updated config.js content:\n${updatedContent}`);
}

module.exports = {
    updateStringConfigItem,
    updateNumberConfigItem
}
