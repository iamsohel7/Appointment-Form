const express = require('express');
const router = express.Router();
const Form = require('../models/dbModel');
const mongoose = require('mongoose');

router.post('/', (req,res)=>{
    const name = req.body.name;
    const phoneNumber = req.body.phoneNumber;
    const email = req.body.email;
    const date = req.body.date;
    console.log(date);
    var newDate = new Date(date.split("-")[0],date.split("-")[1],date.split("-")[2]);
    console.log(newDate)
    var currentDate = new Date();
    if(newDate<currentDate){
      return  res.status(400).json({status:"failure", message: "Date already passed"});
    }else{
        const formData = new Form({
            name,
            phoneNumber,
            email,
            date
        })
        formData.save()
          .then(()=> res.status(201).json({status:"success", message:"The form is submitted"}))
          .catch(err=>res.status(400).json({status:"failure", message:"Check your email(wrong pattern or already exist)."}))
    }
    
})

module.exports = router;