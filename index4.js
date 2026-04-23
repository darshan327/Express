   import express from "express";
   const app = express();

//   //ugly code 
// app.get('/student', (req,res) => {
//    res.send('All Students')
// })
//
//    app.post('/student', (req,res) => {
//    res.send('Add new Student')
//    })
//
//  app.put('/student', (req,res) => {
//    res.send('Update the student ')
// })
//
//   app.delete('/student', (req,res) => {
//  res.send('Delete student');
 //  })

 
 // Refactor
   app
   .route('/student')
   .get((req,res) => res.send("all student"))
   .post((req,res) => res.send("add new student"))
   .put((req,res) => res.send("update student"))
   .delete((req,res) => res.send("delete Student"));



  app.listen(3000, () => console.log("server up!"));

