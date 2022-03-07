const express = require("express");
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

// this is our built-in body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("../client"));

// NOTE: HOW TO CONVERT TO PG
// 1) Build our connection
//    a) install PG - DONE
//    b) connect - DONE
const keys = require("./config/keys");
const { Client } = require("pg");
const conn = new Client(keys);

conn
  .connect()
  .then(() => console.log(`Connected to ${keys.database} database`))
  .catch((err) => console.log(`Error connecting to db.`));

// 2) Build blueprints -DONE!!!!!
//    a) Schema
//    b) Model
// NOTE: Done by the DBA when they create db and tables

app.get("/", (req, res) => {
  res.send("Root route");
});

// Write queries
const userId = 1; // represents specific users
// NOTE: normally you would get the user id from some sort of logging in, 
// maybe with Passport and then grabbing the user info

// Read - GET
app.get("/todos", (req, res) => {
  let query = `SELECT 
                id AS _id,
                id,
                description,
                iscomplete AS "isComplete"
                FROM todos
                WHERE user_id = ${userId};`;
  conn
    .query(query)
    .then((todos) => res.status(200).json(todos.rows))
    .catch((err) => {
      console.log(err);
      res.status(400).json("There is an error reading from db");
    });

  // TodoModel.find({}, (err, results) => {
  //   if (err) res.status(400).json("There is an error reading from db");
  //   else if (results.length > 0) res.status(200).json(results);
  //   res.status(200).json({ message: "You ain't got no todos!!" });
  // });
});

// Create - POST
app.post("/todos", (req, res) => {
  let query = `INSERT INTO hr.todos
                  (description, iscomplete, user_id)
                  VALUES('${req.body.description}', false, ${userId})
                  RETURNING *;`;
  conn
    .query(query)
    .then((todo) => res.status(200).json(todo.rows[0]))
    .catch((err) => res.status(400).json("There is an error posting to db"));
});

// Delete - DELETE
app.delete("/todos/:id", (req, res) => {
  let query = `DELETE FROM hr.todos
                WHERE id = ${req.params.id}
                  and user_id = ${userId}
                RETURNING *;`;
  conn
    .query(query)
    .then((todo) => res.status(200).json(todo.rows[0]))
    .catch((err) => res.status(400).json("There is an error deleting from db"));
});

// Update - PUT
app.put("/todos/:id", (req, res) => {
  let query = `UPDATE hr.todos
                  SET iscomplete = NOT iscomplete
                WHERE id = ${req.params.id}
                  and user_id = ${userId}
                RETURNING *;`;

  conn
    .query(query)
    .then((todo) => res.status(200).json(todo.rows[0]))
    .catch((err) => res.status(400).json("There is an error updating from db"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
