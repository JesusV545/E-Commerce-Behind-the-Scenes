# E-Commerce Behind the Scenes

## Description 
With this application, the user is able to view and configure database information using insomnia and HTTP requests.

## Purpose
In this project, the usage of various new techniques are applied and put together to make a functioning server that performs various executions depending on the users input.
This project uses node.js, insomnia, sequelize, express, dotenv, and mysql2. 

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## How to use
Once the code is loaded, open up the intergrated terminal and log in to MySql to create the database by running 'SOURCE schema.sql'. After that, simply return to the intergrated terminal and run the 'npm i' command to download the codes dependencies. Lastly, run the server by typing in 'npm run start' on the terminal. Once the server is running, navigate to insomnia and request the desired paths.

## At a Glance



#### Links


