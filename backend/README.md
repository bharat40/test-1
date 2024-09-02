# What is NodeJS

- Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser. It is built on Chrome's V8 JavaScript engine, which compiles JavaScript code directly to native machine code, making it highly efficient and performant.

# in short

- Open source
- Server side
- JavaScript used to build server
- Runtime Environment -> allow run JS code in the server
- Node JS allows developers to use same language in frontend and backend (i.e client side, server side)
- Built on Chrome v8 JS Engine -> known for high performance and efficient execution of JS code

# Chrome V8 JS Engine

- Human readable JS Code -> V8 Engine -> Machine Readable Language

# Client Side and Server Side

- Client Side -> frontend -> request
- Server Side -> backend -> response

# Requirements

- Node JS
- NPM
- VSCODE
- Postman (Postman is an API platform for building and using APIs.)

# Package.json

- Stores details of project including a list of packages intalled

# Nodemon

- Automatically restarting the node application when file changes in the directory are detected

# Nodejs modules

- https://nodejs.org/docs/latest/api/

# Server

- A Server is a program or a device that provides functionality for called clients
- Responsible for delivering data to another clients

# JSON

- Stands for JavaScript Object Notation
- It is a lightweight format for storing and transporting data
- It is structured and organized data
<!--
{
    "name": "John",
    "age": 24,
    "hobbies": ["reading", "painting", "swimming"]
}
-->

# API

- API stands for Application Programming Interface.
- APIs are mechanisms that enable two software components to communicate with each other using a set of definitions and protocols.
- For example, the weather bureau’s software system contains daily weather data. The weather app on your phone “talks” to this system via APIs and shows you daily weather updates on your phone.

# Create a Server

- creating a server in NodeJS via express package
- ExpressJS is a popular framework for building web applications and APIs using NodeJS

# Methods to share data

- GET, POST, PATCH, DELETE
- GET => you don't change anything => you just want to get the information
- eg of GET req => when you enter a website URL, your browser send a GET req to the server to fetch the web page.

# Database

- Web development => client + server + server
- A database is an organized collection of structured information, or data, typically stored electronically in a computer system
- Now there are lots of database out there in the market, we can use according to our need => SQL, PostgreSQL, MongoDB, MariaDB, Oracle

# Basic Structure

Web => React.js
Server => Express.js (Node.js)
Database => MongoDB

# MongoDB

- Installation Process => https://www.youtube.com/watch?v=1LiZRYzgM2o
- Start MongoDB Server
- Now we can use MongoDB Shell from where we can interact with databases
- Create database / move inside a database => use databaseName
- Create a Table (Collection in MongoDB) => db.createCollection("nameOfCollection")
- View Collections in database => show collections
- Insert data => db.nameOfCollection.insertOne({id: 1, name: "Bharat", age: 19})
- View data in a collection => db.nameOfCollection.find()
- Update data => db.nameOfCollection.updateOne({name:"Bharat"}, {$set: {age:20}}) => update age of document having name: "Bharat"
- Delete data => db.collectionName.deleteOne({name: "Bharat"})

# MongoDB Compass GUI

- MongoDB Compass helps you visualize MongoDB data

# Postman

# MongoDB driver

- To connect MongoDB databse with NodeJS with need a MongoDB driver (a set of programs)
- It act as a bridge between your NodeJS application and the MongoDB database
- MongoDB driver translates the JavaScript code from NodeJS into a format that MongoDB can understand
- Provides a set of functions and methods that make it easier to perform common database operations
- It also helps in handling error that might occur during database interactions
- Most popular driver is mongodb package (npm install mongodb)

# Mongoose

- but we are going to use mongoose rather than mongodb
- It is an Object Data Modelling (ODM) library for MongoDB and NodeJS
- It is like a translator between NodeJS and MongoDB database
- There are many reason to choose Mongoose over default driver mongodb (https://stackoverflow.com/questions/28712248/difference-between-mongodb-and-mongoose)

# Database connection

- connect MongoDB with NodeJS
- create db.js in root folder (responsible for database connection using mongoose library)

# Establish connection Step by Step

- Define MongoDB connection URL (const mongoURL = "https://localhost:2707/mydatabase") => replace 'mydatabase' with your database
- Set MongoDB connection (mongoose.connect(mongoURL, {useNewUrlParser: true,
  useUnifiedTopology: true,}))
- const db.mongoose.connection; (assigns the connection object created by Mongoose to the variable db) => By assigning this connection object to the db variable, you can easily access and interact with the database connection throughout your application.
- Define event listeners
- export the database connection

# what are models or schema

- models are like blueprint of our database
- once models are defined, we can create, read, delete, update documents in the corresponsing MongoDB collection
- Mongoose allows us to define a schema for our documents.
- example below for persons data
  {
  "name":"Alice",
  "age":28,
  "work":"Chef",
  "mobile":"1234-567-89",
  "email":"alice@example.com",
  "address":"123 Main st, city",
  "salary":60000,
  }
- https://mongoosejs.com/docs/guide.html

# body-parser

- it is a middleware library for expressjs

- it is used to parse and extract the body of incoming http requests
- when a client sends data to a server it typically includes that data in the body of an HTTP request
- that data can be in various format like json, form etc
- npm install body-parser
- it stores data after processing in req.body

# send data from client to server

- we need an Endpoint where the client sends data and data needs to be saved in the database
- we need a method called POST

# Async await

## Async

- it is a function designed to work with asynchronous operations

## await

- The await keyword makes the function pause the execution and wait for a resolved promise before it continues

# CRUD

- create, read, update, delete (DB operations)
- Create -> POST
- Read -> GET
- Update -> PUT/PATCH
- Delete -> DELETE

- C3q3hs1ixZYA3h5c - password mongodb atlas cluster