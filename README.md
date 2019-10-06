# CRA Docker Template

A full stack template to get `create-react-app` up and running with Docker. Included are 3 preconfigured containers:

- `frontend` - the client side container with the `create-react-app` boilerplate.
  - Includes a login and registration form, connected via redux.
- `api` - the server side container running Hapi.js.
  - Includes all the necessary tools for user registration and login using JSON web tokens.
- `postgres` - a postgres image that uses the credentials in `common.env`.

A self signed certificate is included for https access during development. You'll need to add certificates for production.

## Getting Started

A sample `common.env` file has been provided. Modify `common.template.env` to include your JWT secret and any other keys you'd like to use, and then rename the file to `common.env`.

You'll need to install Docker to use this template. You can download it free [here](https://docs.docker.com/install/).

Once you have Docker installed, run `docker-compose up` from within the directory. This command will run `npm install`, run the migration files, and start all the containers.

Navigate to `https://localhost.com:3000` to see your app in the browser.

## Accessing the Container Bash

Before running terminal commands, such as `npm install <some-package>`, you'll need to access the appropriate container bash prompt. To do so, run `docker-compose exec <container-name> bash`. The standard containers names in this template are `api`, `frontend`, and `postgres`. You can add, remove, or edit containers to suite your specific project needs.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
