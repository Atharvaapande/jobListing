const mongoose = require('mongoose');
const CompanySchema = new mongoose.Schema({
    name:String,
    description:String,
    contactEmail:String,
    contactPhone:String
});
const JobSchema = new mongoose.Schema({
    title:String,
    type:String,
    description:String,
    location:String,
    salary:String,
    company:CompanySchema
})

const JobModels = mongoose.model('jobs',JobSchema);
module.exports = JobModels