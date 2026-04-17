   import express from "express";
    const app = express();
    const cb1 = (req, res,next) => {
       console.log("first callback");
       next();
    };
      const cb2 = (req, res,next) => {
        console.log("Second callback");
        next();
     }
       const cb3 = (req, res) => {
         console.log("Third callback");
         res.send("Array of Callbacks");
         }
         app.get("/array-cb", [cb1, cb2, cb3]);
      
   app.listen(6000,() => console.log("server up!"));
   
        console.log("I am still running...");   