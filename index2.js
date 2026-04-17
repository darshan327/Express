  // Req and Res Advance Topics
  
import express from "express";
    const app = express();
  
     app.get(
         "/double-cb",(req,res,next) => {
             console.log("first callback");
             next();
         },
         (req,res) => {
             res.send("second Callback");
         }
     );
  
     app.listen(4000,() => console.log("server up!"));  