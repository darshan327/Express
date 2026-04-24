 // - Express Middleware's In Depth

   /*
     -Request

     -middleware

     -Response
     */
  
  
  import express from "express";
  import userCredentional from "./logs.js"
  const app = express();

   app.use(userCredentional);

  app.get('/',(req,res) => {
     res.send("<h1> Hello Admin </h1>");
  });

    app.get('/about',(req,res) => {
     res.send("<h1> About section </h1>");
  });

    app.get('/contact',(req,res) => {
     res.send("<h1> contact page</h1>");
  });

  app.listen(7000, () => console.log("server up!"));