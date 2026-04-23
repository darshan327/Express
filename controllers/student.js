 import express from "express";

  const allstudent = (req,res) => {
      res.send("all student");
  };

  const newstudent = (req,res) => {
     res.send('create new user');
  };

  const updatestudent = (req,res) => {
      res.send("update the sthudent");
  };

  const deletestudent = (req,res) => {
     res.send("delete student"); 
  };

  export { allstudent, newstudent, updatestudent, deletestudent};
