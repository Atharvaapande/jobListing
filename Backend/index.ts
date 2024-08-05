// const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const JobModels = require('./models/JobsModel');
import express, {Request,Response} from 'express'

const app = express();
app.use(cors());
mongoose.connect("mongodb://localhost:27017/jobSphere")

app.get('/getJobs',(req:Request,res:Response)=>{
    JobModels.find(req.query)
    .then((jobs:any) => res.json(jobs))
    .catch((error:any) => res.json(error))
})

app.get('/getJobs/:id',(req:Request,res:Response)=>{
    JobModels.findById(req.params.id)
    .then((job:any)=> res.json(job))
    .catch((error:any)=> res.json(error))
})

app.listen(3001,()=>{console.log('Server is running')});