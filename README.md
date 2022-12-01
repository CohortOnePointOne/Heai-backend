# Heai Backend

This is the backend for the Heai Project. The project is an api built with Nodejs
and Express.

## Features

**The project is still in early development. However the following features are planned.**

- User Registration & Profiles
- Users can create Articles
- Users can comment on articles
- Users can like articles
- Users can rate articles

## Quick Setup

**Download or clone the repo and run npm install to install dependencies**

```bash
  npm i

```

**Create a create development environment variable file for your development setup in the config folder**

```bash
  cd config
  touch dev.env

```

**Create a separate one for your tests.**

```bash
  touch test.env

```

Add the following environment variabls to your environment files.

`PORT` should be a number e.g 30000

`TOKEN_SECRET` should be a string (used by JWT)

`MONGO_DB` connection to your mongodb

### Note:

When you set up the test environment file, set up a diffrent MONGO_DB variable for a test database.
When you run tests, all data is deleted from the database after the tests complete.

Set the PORT variable in the test environment file to a different port.

## Available Scripts

**Start the server and run the built version of the app.**
(build/index.js)

```bash
  npm start
```

**Start the server with nodemon.**
(src/index.js)

```bash
  npm run dev
```

**Lint the code with ESLint.**
This project used AirBnB Standards with a few tweaks. Check .eslintrc.json to see implemented tweaks or to add your own.

```bash
  npm run lint
```

**Run tests in verbose mode and generate a coverage report**

```bash
  npm test
```

**Run tests in verbose mode without coverage report.**
This for use during development.

```bash
  npm run dev:test
```

**Check whether code meets prettier standards.**
Check .prettierrc to see implemented tweaks or to make your own.

```bash
  npm run prettier:check
```

**Prettify code with prettier.**

```bash
  npm run prettier:write
```

**Build the project using babel.**
The build code is stored in /build.

```bash
  npm build
```

### Note:

The project uses husky to run a precommit script that lints the code.
You can find and edit the precommit script at

`.husky/pre_commit` 
