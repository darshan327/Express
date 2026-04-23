import express from "express";
const app = express();

  // query string

 /* app.get('/product',(req,res) => {
    res.send(`response ok ${req.query.category}`);
  })
    */

  app.get('/product',(req,res) => {
      const {category, id}= req.query;
      res.send(`product category: ${category} & product id ${id}`);
  });

  app.listen(7000, () => console.log("server up!"));
