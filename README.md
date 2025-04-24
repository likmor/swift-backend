# Backend test task

## Prerequisites
- Node.js
- Docker

## How to run
```bash
docker-compose up --build
```
DB is seeded on every container startup

APIs will be available at localhost:8080
- DELETE:  /v1/swift-codes/{swift-code} Deletes swift-code data if swiftCode matches the one in the database
- POST:  /v1/swift-codes Adds new SWIFT code entries to the database for a specific country, expects following json structure:
```bash
{
    "address": string,
    "bankName": string,
    "countryISO2": string,
    "countryName": string,
    "isHeadquarter": bool,
    "swiftCode": string,
}

```
- GET:  /v1/swift-codes/country/{countryISO2code} Return all SWIFT codes with details for a specific country (both headquarters and branches)
- GET:  /v1/swift-codes/{swift-code} Retrieve details of a single SWIFT code whether for a headquarters or branches
## How to run tests (stop all containers before running)
```bash
npm i
npm test
```

## To stop and remove all containers and data
```bash
docker-compose down -v
```
