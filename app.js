const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// body parser middleware
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/api/hello', (req,res)=> {
  res.send({express: 'Hello From Express'});
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(3001, ()=> {
  console.log("Express Started on 3001");
});

// NOTES
/*
1. Find old heroku account and set back up
2. Add “start” script in package.json,
so that Heroku knows how to start the app
*/
