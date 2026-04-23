  //Route Parameters In Depth
  
  import express from "express";
   const app = express();

   // route params
   app.get("/product/:category/:id", (req,res) => {
      const { category , id} = req.params;
      res.send(`product category (${category}) and product id (${id})`);
   }); 

   // day,month and year
    app.get("/product/order/:day/:month/:year", (req,res) => {
    const { day , month ,year} = req.params;
    res.send(`product was ordered on: ${day}/${month}/${year}`);
     });
     
     // using param
     app.param("year", (req,res,next,id) => {
         console.log(`id: ${id}`);
         next();
     });

     app.get("/user/:id",(req,res) => {
        console.log("this is user id path");
        res.send("response ok");
     });

   app.listen(9000, () => console.log("server up!"));