# Daitan Coding Challenge

You must implement a simple device management web app. Devices have (Id, category, color,
partNumber). The device category must also be managed by your APP. Types have (id, name).
- Login and authentication is not necessary.
- Web app must have a menu with two options: Category Management, Device
Management.
- You must implement Create, Read and Delete. (Update is not necessary due to time
constraints for this implementation)
- All fields are mandatory.
- You are free to use any layout but the APP must list all devices and categories, and also
have screens/components that enable the user to create new categories and devices, or
delete them.

Device:

- Id: (generated automatically. Integer and incremental)
- Category: A dropdown selection you can choose from all categories available.
- Color: Text field, with validation (letters only, max size 16)
- partNumber: positive integer field, with validation.

Category:

- Id: (generated automatically, integer and incremental)
- Name: Must not be empty. All categories must have a name. Max size 128 chars.

# Prerequisites
- [Node.js with Node Package Manager](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)
- [Docker](https://docs.docker.com/engine/install/ubuntu/), in case you couldn't install, [read this guide](https://computingforgeeks.com/install-docker-and-docker-compose-on-linux-mint-19/)
- [Angular CLI](https://angular.io/cli)
- [DBeaver](https://dbeaver.io/download/), if you want to manage our database
- [Postman](https://www.postman.com/), in case you want to test our API

# Setting Up our Dependencies
First, let's install our project dependencies.  
At our project root folder `./desafioDaitan` install the project dependencies defined on our package.json file:
```
yarn
```
Next, we have to install our backend dependencies located on `./desafioDaitan/packages/device-management-backend`:
```
yarn
```
And finally, install our device management app dependencies located on `./desafioDaitan/packages/device-management-app`:
```
yarn
```

# Setting Up our Project
Now that we have all our dependencies installed, we have to run our application.
First, let's run our MySQL docker image. Go to our root project folder `./desafioDaitan` and run:
```
yarn start
```
With this, he have our database running on `http://localhost:3306`

Second, we have to start our backend application. So go to our backend folder `./desafioDaitan/packages/device-management-backend` and run:
```
yarn start
```
To see if your backend is running, access `http://localhost:8080` to get a response
And lastly, let's start our device management application. Go to our app folder `./desafioDaitan/packages/device-management-app` and run:
```
yarn start
```
Now we have our app running on `http://localhost:8081`

# Miscellaneous
- Note that at the moment we run our backend, with our database connected, in case we don't have any device or category table created, our backend application create these two tables.  
- You can access our database with DBeaver using `Server Host` as localhost, `Port` as 3306, `Username` as root and `Password` as Root.  
- In case you get any Public Key Retrieval error, set `allowPublicKeyRetrieval` to `TRUE` and `useSSL` to `FALSE`
- Our API routes are:
  1. Devices:
      - GET: http://localhost:8080/api/devices
      - POST: http://localhost:8080/api/devices
      - PUT: http://localhost:8080/api/devices/:id
      - DELETE: http://localhost:8080/api/devices/:id
  2. Categories:
      - GET: http://localhost:8080/api/categories
      - POST: http://localhost:8080/api/categories
      - PUT: http://localhost:8080/api/categories/:id
      - DELETE: http://localhost:8080/api/categories/:id
- We have CRUD operations implemented on our API but our app only supports CRD operations.
