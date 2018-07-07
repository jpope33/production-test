const express = require('express');

const app = express();

app.get('/api', (req,res)=> {
  res.json({isLoggedIn: false, message: "You can't access shit"});
})

app.listen(3001, ()=> {
  console.log("Express Started on 3000");
});

// NOTES
/*
1. Find old heroku account and set back up
2. Add “start” script in package.json,
so that Heroku knows how to start the app
*/
