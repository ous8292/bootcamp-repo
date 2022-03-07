Consuming an APi
    - Third party tells us what endpoints/routes
    - what type of response - json or xml or something else
        - Do we need authentication or authorization
    - How much data - everything or more specific
        - How many requests can I make
    - What data can we actually get - name, birthday or everything?

Building an API
    - We get to decide what the endpoints/routes are
    - We get to decide on what type of data we send back; json, xml or primitives
    - We decide how much data the client gets back
    - We decide what dat ais actually returned - we are going to send SS#!!
    - We decide the status code to send


POST DELETE and 
    do not exsist in the server


CRUD
    Create, Read, Update, Delete
    Create - adding our todo to our list
        - using POST method
    Read - displaying our information
        - using GET method
    Update - have we completed? if so mark it
        - using PUT method, and maybe PATCH. Put updates all, Patch updates and returns specific
    Delete - Delete a completed task
        - using the DELETE method



When using a form with POST, 

sensitive information - POST
large amounts of data - POST
    -url string limit
files - POST
images - POST
304- nothings changed, you already have it cached
200 - all good
Using POST you CANNOT cache the data

/doggy/:house -> req.params.house
/doggy/search?house=car -> req.query.house
POST in a form with submit button -> req.body.house



Front end fetch all has the same structure