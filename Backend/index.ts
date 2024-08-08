// const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const JobModels = require('./models/JobsModel');
import express, {Request,Response} from 'express'

const app = express();
app.use(cors());
app.use(express.json());
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

app.post('/addNewJobs', async (req:Request,res:Response)=>{
    let newJob = new JobModels(req.body);
    let result = await newJob.save();
    res.send(result);
})

app.put('/jobUpdate/:id', async (req: Request, res: Response) => {
    try {
        const jobId = req.params.id;
        const jobData = req.body;

        const job = await JobModels.findById(jobId);

        if (job) {
            job.title = jobData.title;
            job.type = jobData.type;
            job.location = jobData.location;
            job.description = jobData.description;
            job.salary = jobData.salary;

            job.company.name = jobData.company.name;
            job.company.description = jobData.company.description;
            job.company.contactEmail = jobData.company.email;
            job.company.contactPhone = jobData.company.phone;

            const updatedJob = await job.save();
            res.status(200).json(updatedJob);
        } else {
            res.status(404).json({ message: 'Job not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'error' });
    }
});


app.delete('/deleteJob/:id',async(req:Request,res:Response)=>{
    const id = req.params.id
    const endResult = await JobModels.deleteOne({_id:id});
    res.send(endResult);
})
app.listen(3001,()=>{console.log('Server is running')});