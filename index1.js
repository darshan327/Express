   import express from 'express'
const app = express()


    app.get('/',(req,res) => {
      res.send("<h1>welcome to home<h1>")
     });


   app.listen(4000,() => console.log("server Up!"));

