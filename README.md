# Basic Project Express Monolith

[![Code Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)](https://github.com/brothergiez/basic-project-express-monolith) [![Code Coverage](https://img.shields.io/badge/version-v1.0.0-yellowgreenn)](https://github.com/brothergiez/basic-project-express-monolith)

Basic project for creating monolithic web app using ExpressJS & Express-Handlebars.

# How To Install
```sh
$ git clone https://github.com/brothergiez/basic-project-express-monolith.git
$ cd basic-project-express-monolith
$ npm install //Installing dependencies
$ cp .env.example .env //Copying environment variables
$ npm run dev //run development server
```

You can access from your browser sample of page rendered :
`http://localhost:3000/`

You can access from your rest client app  (postman/insomnia) :
```
Method  : GET
Url     : http://localhost:3000/api/
```

You can access from your browser sample online documentation for rest sevice generated bu SwaggerUI :
`http://localhost:3000/api-docs/`

You can run unit testing with command:
```sh
$ npm run test:coverage
```

You can run lint with command:
```sh
$ npm run lint
```


# What's in this project?
  - View engine with express-handlebars
  - Create routes in separate file
  - Separating request handler from routes
  - SwaggerUI documentation
  - Test-Driven Development using Mocha, Chai, Sinon
  - NYC package for prining code coverage to html file
