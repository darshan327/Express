  // create Folder
  // npm init -y 
  // npm i express
  // create Instance express
  // provide port : 3000
  // Basic  Route /
  
  
  import express from 'express'
  const app = express()

  // basic Routing
   app.get('/',(req,res) => {
      res.send("<h1>welcome to home<h1>")
   });

    app.get('/about',(req,res) => {
    res.send("<h1>welcome to about<h1>")
 });

  app.get('/contact',(req,res) => {
    res.send("<h1>welcome to <h1>")
 });


  app.listen(4000,() => console.log("server Up!"));