// const express = require("express");
// const app = express();

// const logger = require("morgan");
// app.use(logger("dev"));

// // this is our built-in body-parser
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));


// app.use(express.static("../client"));


// //NOTE HOW TO CONVERT TO MONGO/MONGOOSE
// //1. Build our connection
// //        install mongoose
// //        connect
// const mongoose = require('mongoose')
// const keys = require('./config/keys')

// mongoose
// .connect(keys.mongoURI)
// .then(() => console.log(`Connected to mongo database`))
// .catch(err => console.log(`Error connecting to database`, err))


// //2. Blue print
// //      a) schema
// //      b) model

// let toDoSchema = mongoose.Schema({
//   //id: Number -- dont need due to mongo giving unique ID
//   description: String,
//   isComplete: {
//     type: Boolean,
//     default: false
//   }
// })

// let toDoModel = mongoose.model("todos", toDoSchema)


// //3 Write Queries
// //we want the db read to happen when we go to the route route
// app.get("/", (req, res) => {
//   res.send("Root route");
// });


// // Read - GET
// app.get("/todos", (req, res) => {
//   toDoModel.find({}, (err, results) => {
//     if(err){
//       console.log("There is an error reading from the database")
//       res.status(400).json("There is an error reading from the database")
//     }else {
//       // display todos
//       if (results.length > 0) {
//       res.status(200).json(results);
//     } else {
//       res.status(200).json({ message: "You ain't got no todos!!" });
//       }  
//     }
//   })
//   res.send("Root route");
// });

// // Create - POST
// app.post("/todos", (req, res) => {
//   let newTodo = toDoModel({
//     description: req.body.description
//   })
//   //saving data to the db using a constructor 
//   newTodo.save((err, result) =>{
//     //getting one result back/receipt
//     if(err){
//       console.log("Error adding data to the database", err)
//       res.status(400).json("There is an error adding to the database")
//     } else {
//       console.log("Success: ", result)
//       res.status(200).json(newTodo);
//     }
//   })
// });

// // Delete - DELETE
// app.delete("/todos/:id", (req, res) => {
//   let requestedId = req.params.id;
//   toDoModel.findByIdAndDelete(requestedId, (err, result) => {
//     if(err){
//       console.log("Error deleting data from database", err)
//       res.status(400).json("Error deleting from the database")
//     } else {
//       console.log("Result: ", result)
//       res.status(200).json(result);
//     }
//   })
// });











// // Update - PUT
// app.put("/todos/:id", (req, res) => {
//   let requestedId = req.params.id;
//   toDoModel.findById(requestedId, () => {
//     if(err){
//       console.log("Error deleting from database", err)
//       res.status(400).json("Error deleting from database")
//     } else {
//       result.isComplete = !result.isComplete;
//       result.save(err, updatedTodo) => {
//         if(err){
//           console.log("Error updating document")
//         }
//       }= else {

//       }
//       }

//     }
//   })

  
//   if (requestedTodo) {
//     res.status(200).json(requestedTodo);
//   } else {
//     res.status(404).json({ message: "Id does not exist in database" });
//   }
// });

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => console.log(`App running on port ${PORT}`));

const express = require("express");
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

// this is our built-in body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("../client"));

// NOTE: HOW TO CONVERT TO MONGO/MONGOOSE
// 1) Build our connection
//    a) install Mongoose - DONE
//    b) connect
const mongoose = require("mongoose");
const keys = require("./config/keys");

mongoose
  .connect(keys.mongoURI)
  .then(() => console.log(`Connected to mongo database`))
  .catch((err) => console.log(`Error connecting to database`, err));

// 2) Build blueprints
//    a) Schema - DONE
//    b) Model - DONE
let todoSchema = mongoose.Schema({
  description: String,
  isComplete: {
    type: Boolean,
    default: false,
  },
});

let TodoModel = mongoose.model("todos", todoSchema);

app.get("/", (req, res) => {
  res.send("Root route");
});

// Write queries

// Read - GET
app.get("/todos", (req, res) => {
  TodoModel.find({}, (err, results) => {
    if (err) res.status(400).json("There is an error reading from db");
    else if (results.length > 0) res.status(200).json(results);
    res.status(200).json({ message: "You ain't got no todos!!" });
  });
});

// Create - POST
// let newId = 4; DELETE: not needed
app.post("/todos", (req, res) => {
  let newTodo = new TodoModel({
    description: req.body.description,
  });
  newTodo.save((err, result) => {
    if (err) res.status(400).json("There is an error posting to db");
    else res.status(200).json(result);
  });
});

// Delete - DELETE
app.delete("/todos/:id", (req, res) => {
  let requestedId = req.params.id;
  TodoModel.findByIdAndDelete(requestedId, (err, result) => {
    if (err) {
      console.log("Error deleting data from db", err);
      res.status(400).json("Error deleting data from db");
    } else {
      console.log("Result: ", result);
      res.status(200).json(result);
    }
  });
});

// Update - PUT
app.put("/todos/:id", (req, res) => {
  let requestedId = req.params.id;
  TodoModel.findById(requestedId, (error, result) => {
    if (error) {
      console.log("Error finding and updating to db", error);
      res.status(400).json("Error updating to db");
    } else {
      result.isComplete = !result.isComplete;
      result.save((err, updatedTodo) => {
        if (err) {
          console.log("Error updating document", err);
          res.status(400).json("Error updating document");
        } else {
          res.status(200).json(updatedTodo);
        }
      });
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
