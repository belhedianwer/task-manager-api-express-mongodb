# Task manager API
This is a task manager API built with Express and MongoDB, this API allows users to create, update, and delete projects, tickets, and tasks.

## Getting started

To get started with this project, follow these steps:

1. Clone the repository: `git clone https://github.com/belhedianwer/task-manager-api-express-mongodb.git`
2. Install the dependencies: `npm install`
3. Create a `.env` file in the root of the project and add the following:

- PORT=3000
- MONGODB_URI=mongodb://localhost:27017/task-manager-api
- JWT_SECRET=yourSecretKey

4. Start the server: `npm start`

## API endpoints

### Users

- POST /users/register: Create a new user
- POST /users/login: Login a user

### Projects

- POST /projects : Create a new project
- GET /projects : Get all projects
- GET /projects/:id : Get a project by id
- PATCH /projects/:id : Update a project by id
- DELETE /projects/:id : Delete a project by id

### Tickets

- POST /tickets : Create a new ticket
- GET /tickets : Get all tickets
- GET /tickets/:id : Get a ticket by id
- PATCH /tickets/:id : Update a ticket by id
- DELETE /tickets/:id : Delete a ticket by id

### Tasks

- POST /tasks : Create a new task
- GET /tasks : Get all tasks
- GET /tasks/:id : Get a task by id
- PATCH /tasks/:id : Update a task by id
- DELETE /tasks/:id : Delete a task by id

## License

This code is open source and is available under the [MIT license](LICENSE).

## Contributing

Contributions to this script are welcome. Feel free to submit a pull request or open an issue if you have any suggestions or bug reports.

## Credits

This code was created by [Anwer Awled Belhedi](https://github.com/belhedianwer).