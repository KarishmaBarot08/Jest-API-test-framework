# SIDEARM-API-TESTS

## API Endpoints and Response IDs

Below is a list of API endpoints and the IDs they return in their responses:

| Endpoint                          | Response IDs                                         |
|-----------------------------------|------------------------------------------------------|
| `/api/v2/Sports`                  | `seasonId`, `conferenceId`, `rosterId`, `scheduleId` |
| `/api/v2/Stories`                 | `contentId`                                          |
| `/api/v2/Stories/related`         | `storyId`                                            |
| `/api/v2/Rosters/list`            | `rosterId`                                           |
| `/api/v2/Archives/filters/sports` | `sport name`                                         |
| `/api/v2/Documents`               | `documentId`                                         |

# API Automation Framework

This framework uses Jest and node-fetch for automated API testing.

## Structure

- **.env**: Environment variables (base URL, tenant IDs)
- **config.js**: Contains configuration settings
- **request/**: API request configurations
- **schema/**: Response schemas for validation
- **tests/**: Test files

## Setup

1. Clone the repository:
    ```sh
    git clone https://bitbucket.org/sidearmsports/sidearm-api-tests.git
    cd SIDEARM-API-TESTS
    npm install
    ```

2. Create a `.env` file:
    ```
    BASE_URL=https://api.staging.sidearmdev.com/api
    TENANT = libertyuni-th
    ```

## Running Tests

- Run all tests:
    ```sh
    npm test
    ```

- Run v2 tests:
    ```sh
    npm test -- --testPathPattern=tests/v2/
    ```

- Run v2.1 tests:
    ```sh
    npm test -- tests/v2.1
    ```

- Run a specific test:
    ```sh
    npm test -- /tests/path/to/file/filename.test.js
    ```

