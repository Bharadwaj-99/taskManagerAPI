
# Personal Task Manager API

This is a simple API for managing personal tasks. It allows you to create, read, update, and delete tasks. The API is built using Express.js and TypeScript, and it uses an in-memory array to store tasks.

## Features

-   **Create Task**: Add a new task with a title, description, and status.
-   **List Tasks**: Retrieve a list of all tasks.
-   **Update Task**: Update the title, description, or status of an existing task.
-   **Delete Task**: Remove a task by its ID.

## Getting Started

### Prerequisites

-   Node.js (v12 or later)
-   npm (v6 or later)

### Installation

1.  Clone the repository or download the project files.
2.  Navigate to the project directory.
3.  Install the dependencies:

bash

Copy code

`npm  install`

### Development

To start the development server, run the following command:

bash

Copy code

`npm run dev`

This will start the server at `http://localhost:3000`. You can test the API endpoints using tools like Postman or cURL.

### Building for Production

To build the project for production, run the following command:

bash

Copy code

`npm run build`

This will compile the TypeScript code and generate JavaScript files in the `dist` directory.

### Running in Production

After building the project, you can start the server in production mode:

bash

Copy code

`npm start`

This will start the server and make the API available at `http://localhost:3000`.

### API Endpoints

-   `GET /api/tasks`: List all tasks
-   `POST /api/tasks`: Create a new task
-   `PUT /api/tasks/:id`: Update a task by ID
-   `DELETE /api/tasks/:id`: Delete a task by ID

### Example Requests

**Create a New Task**

bash

Copy code

`curl -X POST -H "Content-Type: application/json" -d '{"title":"Buy groceries","description":"Get milk, eggs, and bread","status":"pending"}' http://localhost:3000/api/tasks`

**List All Tasks**

bash

Copy code

`curl http://localhost:3000/api/tasks`

**Update a Task**

bash

Copy code

`curl -X PUT -H "Content-Type: application/json" -d '{"status":"completed"}' http://localhost:3000/api/tasks/abcd1234`

**Delete a Task**

bash

Copy code

`curl -X DELETE http://localhost:3000/api/tasks/abcd1234`

## Deployment

The API can be deployed to various hosting platforms, such as Vercel, Heroku, or AWS. For instructions on how to deploy to Vercel, refer to the [deployment documentation](./DEPLOYMENT.md).

## Contributing

Contributions are welcome! If you find any issues or want to add new features, please open an issue or submit a pull request.