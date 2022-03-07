Making a server remotely (cloud)

user: peter

pw: tu6kIo1fgP3JFPXf

mongodb+srv://peter:<password>@peteraugclass.i9564.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongodb+srv://peter:tu6kIo1fgP3JFPXf@peteraugclass.i9564.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

Notes:

Database - holds one or more collection of documents
collections - group of documents
Documents - Javascript like object that contains data, such as strings, numbers, arrays, and objects

Working with Mongoose. Imagine 3 Parts:

1. Connection
   1.a mongo uri
   1.b options
2. Blueprints
   2.a schema
   2.b model
3. Queries
   3.a Create
   3.b read
   3.c update
   4.d delete

Gets all the data
db.getCollection(' ').find({})

//shows all collection
show collections

//checks the collection for either everything {} or something specific (xxxxx)
db.xxxx.find({})

//shows all dbs
show dbs

// sets up to use the database named
use xxxxxx

//inserting data
db.xxxx.insert({xxxxMatchTheModelxxKeyValuePairsxxx})

//Update the data
db.cats.UpdateOne({xxxxxxxxxxxxxx}, {$set:{xxxKeyxxValuexxx}})

//delete only one, deleteAll deletes many
db.xxx.deleteOne({\_id: xxxxxxxxx})

db.cats.find({age: {$lt: 10}})

db.characters.insert({alias: "Black Widow", fname: "Natasha", hero: true})

db.characters.find({hero: true}).count()
db.cats.find({age: { $lt: 10} })

db.cats.updateOne({name: "ceesar"}, {$set:{name: "Caesar"}})

db.cats.deleteOne({\_id: ObjectId("61fc95831592a2dcd699f4b1")})
