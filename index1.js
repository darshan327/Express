   // Http Methods

   // GET -> retrive Data
   // Post -> create/Insert Data
   //  Put -> completely Update Data
   // patch -> Partially Update data
   // Delete -> Delete Data
   // All Any Http Request Method
   

      import express from 'express'
       const app = express()
    // String Pattern 
     app.get('/', (req, res) => {
     res.send("Home Page");
       });

      // regex version
       app.get(/^\/ab?cd$/, (req, res) => {
      res.send("if you click on abcd or abc then it will run");
     });

       app.listen(5000, () => console.log("server Up!"));


