const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// body parser middleware
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/api/hello', (req,res)=> {
  res.send({express: 'Hello From Express'});
})

app.listen(3001, ()=> {
  console.log("Express Started on 3001");
});

// NOTES
/*
1. Find old heroku account and set back up
2. Add “start” script in package.json,
so that Heroku knows how to start the app
*/
