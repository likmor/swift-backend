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
## How to test
```bash
npm i
npm test
```

## To stop and remove all containers and data
```bash
docker-compose down -v
```
