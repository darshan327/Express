 import express from "express";
 import student from './student.js'
 import teacher from './teacher.js'
 const app = express();

 app.use('/students',student);
 app.use('/teacher',teacher);
 
 // 1. create routes folder and put your router in a seperate file
 // 2. create instance of express.Router()
 // 3. instead of app.method change that to "router.method"
 // 4. export router 
 // 5. Import router
 // 6. use the (app.use) built-in middleware & provide your routes.

 app.listen(5000, () => console.log("server Up!"));