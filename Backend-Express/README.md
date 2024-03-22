# Backend for Inventory Manager - PT Bejana Varia Globalindo

## Tech Stack

- **Express.js**: A fast, unopinionated, minimalist web framework for Node.js, serving as the backbone of our REST API.
- **PostgreSQL**: Chosen for its robust features, reliability, and compatibility with Sequelize ORM.
- **Sequelize ORM**: Facilitates object-relational mapping for Node.js, simplifying database operations and queries.
- **Docker**: Used for containerizing the application, ensuring consistency across different environments and simplifying deployment processes.
- **Jest**: Employed for testing, ensuring that all components of the application work as expected before deployment.

## Getting Started

These instructions will get the backend system up and running on your local machine for development and testing purposes.

### Prerequisites

- Docker and Docker Compose should be installed on your machine.
- Node.js (version 14 or above) should be installed if you plan to run the application outside of Docker for development.

### Installation and Running with Docker

1. Install Dependencies:
   ```bash
   npm install
   ```

2. Use Docker Compose to build the services:
   ```bash
   docker-compose up --build
   ```
   This command will start the PostgreSQL database and the Express.js application in separate containers. The application should now be accessible on `http://localhost:3000` or another specified port.

3. start the services:
   ```bash
   npm run start //for running default schema
   or
   npm run dev //running developer environment
   ```

### Installation and Running without Docker

1. Install Dependencies:
   ```bash
   npm install
   ```
2. Set-up Postgres Database:
   Database Name: inventory
   If you have PostgreSQL installed on your local machine, you can create a new database for the application. If you don't have PostgreSQL installed, you can download and install it from the official PostgreSQL website.

4. Run Database Migrations
Before running the application, you need to set up your database schema. This project uses Sequelize for database migration. Run the following command to execute the migrations:
  ```bash
   npx sequelize-cli db:migrate
   ```
5. Run Seeders
  ```bash
   npx sequelize-cli db:seed:all
   ```

6. start the services:
   ```bash
   npm run start //for running default schema
   ```

### Running Tests

To run tests using Jest, first ensure the application is running. Then, execute the following command:
```bash
npm run test  //running testing environment
```
This will run all the tests defined in the test suite and output the results.
