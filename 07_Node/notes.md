(CTRL + C) - kills a running process
node app.js - starts the server; if there are any changes to app.js then user must kill the process and then restart
nodemon app.js - starts the server; user does not need to restart the server if there are any changes to app.js
npm init - creates a package.json file to be used by the server as a ‘blueprint’ on how to run the server file
ps aux | egrep app.js - command line statement that allows the user to discover which processes are running in terminal
rs - forces a restart of nodemon




Basic Backend (server):
	PARENT FOLDER
            index.js
            package.json
            package-lock.json
            node-modules (folder)
            