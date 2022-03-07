Common types of HTTP Request Methods-----------

GET -
GET requests are used to retrieve data from a server
GET request only requests Data. Does not modify
Example: Visiting the homepage of Amazon.com

POST -
POST Request are used to send data to a server
Examples: Uploading files, submitting a form

PUT -
PUT requests are used to update/modify data on a server
Examples updating your email on social network

DELETE -
DELETe request are used to delete data on a server
Examples: Deleting your account on a social network

res.send - sends text to the page

Route Parameters -----

We can use Route parameters to capture values that are specified in the URL

Those valuess are found in the req.params object

//Route path: /v3/users/:username/:userid
//Request URL: http://localhost:3000/v3/users/jennifer/17
//req.params: {"username": "jennifer"m "userid": "17"}

The req - object will contain all the information about the request just made including route parameters

Template Engines ----

allow us to build dynamic web pages where data can update or change

Examples - EJS, Pug, Mustache, and Jade

What is a Template?
An EJS template is similar to an HTML file, but you can inject data into it using JS. Think of it as a hybrid of HTML/JS

EJS - embedded javascript

Sending data to Views ------------------------------

The method -> res.render() method. We can use this to render out EJS template

Example ---

app.get("/", function(req,reS) {
res.render("main.ejs")
})

main.ejs is the EJS template

Passing Data ------

res.render("main.ejs", {pastry:"donut"})

on main ejs ----> <%= pastry %>
this will render donut

req.params contains route parameters (in the path portion of the URL), and req.query contains the URL query parameters (after the ? in the URL).

req.params
/:name/:age ---> localhost:3000/peter/29
{name: peter, age:29}

req.query (or querystring)
?test=bigtest
{test: bigtest}
