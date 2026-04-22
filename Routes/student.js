  import express from 'express'
  const router = express.Router();

    router.get('/all',(req,res) => {
       res.send("all students")
    } );

      router.post('/create',(req,res) => {
     res.send("sign in new student")
  } );

    router.put('/update',(req,res) => {
     res.send("update student")
  } );

    router.delete('/',(req,res) => {
     res.send("Remove student from the database")
  } );

    export default router;