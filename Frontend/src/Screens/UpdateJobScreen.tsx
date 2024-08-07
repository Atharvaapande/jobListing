import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import { useLoaderData } from "react-router-dom"

interface Props{
    updateFunction:(para:any)=>void;
}

interface Company {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
    _id: string;
}

interface Job {
    _id: string;
    title: string;
    type: string;
    description: string;
    location: string;
    salary: string;
    company: Company;
}

export function UpdateJobScreen({updateFunction}:Props){
    const job = useLoaderData() as Job;
    
    const [jobForm,setJobForm] = useState({
        jobId:job._id,
        jobType:job.type,
        jobTitle:job.title,
        jobDescription:job.description,
        jobSalary:job.salary,
        joblocation:job.location,
        companyName:job.company.name,
        companyDescription:job.company.description,
        companyEmail:job.company.contactEmail,
        companyPhone:job.company.contactPhone
    })

    const Navigate = useNavigate()

    const handelUpdate = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        const updatedJob={
            id:jobForm.jobId,
            title:jobForm.jobTitle,
            type:jobForm.jobType,
            description:jobForm.jobDescription,
            location:jobForm.joblocation,
            salary:jobForm.jobSalary,
            company:{
                name:jobForm.companyName,
                description:jobForm.companyDescription,
                email:jobForm.companyEmail,
                phone:jobForm.companyPhone
            }
        }
        updateFunction(updatedJob); 
        toast.success('Job Updated Successfully!!')
        return Navigate(`/jobs/${job._id}`);
    }

    if (!job) {
        return <div>Loading...</div>; // Or handle loading state appropriately
    }
    return (
        <>
        <div className='ajp'>
            <div className="addJobPage">
                <form onSubmit={handelUpdate}>
                <h1>Update Job</h1>
                <label htmlFor="jobs">Job Type:</label>
                <select name="jobs" id="jobs" value={jobForm.jobType} onChange={(e)=>{
                    setJobForm(prev=>({
                        ...prev,
                        jobType:e.target.value
                    }))
                }}>
                    <option value="fullTime">Full Time</option>
                    <option value="partTime">Part Time</option>
                    <option value="remote">Remote</option>
                    <option value="freelancing">Freelancing</option>
                </select>
                <label htmlFor="jobTitle">Job Title:</label>
                <input type="text" placeholder="eg. Web Developer" name="jobTitle" value={jobForm.jobTitle} onChange={e=>{
                    setJobForm(prev=>({
                        ...prev,
                        jobTitle:e.target.value
                    }))
                }}/>
                <label htmlFor="jobDescription">Job Description</label>
                {/* <textarea type="text" placeholder="Add anything like job duties, requirnments." name="jobDescription"/> */}
                <textarea name="jobDescription" id="jobDescription" placeholder="Add anything like job duties, requirnments." value={jobForm.jobDescription} onChange={e=>{
                    setJobForm(prev=>({
                        ...prev,
                        jobDescription:e.target.value
                    }))
                }}></textarea>
                <label htmlFor="jobSalary">Salary:</label>
                <select name="jobSalary" id="jobSalary" value={jobForm.jobSalary} onChange={e=>{
                    setJobForm(prev=>({
                        ...prev,
                        jobSalary:e.target.value
                    }))
                }}>
                    <option value="Under 50k">Under 50k</option>
                    <option value="Between 50k to 75k">Between 50k to 75k</option>
                    <option value="Above 75k">Above 75k</option>
                    <option value="Confidenntial">Confidential</option>
                </select>
                <label htmlFor="location">Location</label>
                <input type="text" placeholder="eg. India" name="location" value={jobForm.joblocation} onChange={e=>{
                    setJobForm(prev=>({
                        ...prev,
                        joblocation:e.target.value
                    }))
                }}/>
                <h1>Company Info</h1>
                <label htmlFor="companyName">Company Name</label>
                <input type="text" placeholder="eg. Microsoft" name="companyName" value={jobForm.companyName} onChange={e=>{
                    setJobForm(prev=>({
                        ...prev,
                        companyName:e.target.value
                    }))
                }}/>
                <label htmlFor="companyDescription">Company Description</label>
                <textarea name="companyDescription" id="companyDescription" placeholder="Add your company information here." value={jobForm.companyDescription} onChange={e=>{
                    setJobForm(prev=>({
                        ...prev,
                        companyDescription:e.target.value
                    }))
                }}></textarea>
                <label htmlFor="contactEmail">Contact Email</label>
                <input type="text" placeholder="example@gmail.com" name="cotactEmail" value={jobForm.companyEmail} onChange={e=>{
                    setJobForm(prev=>({
                        ...prev,
                        companyEmail:e.target.value
                    }))
                }}/>
                <label htmlFor="contactPhone">Contact Phone</label>
                <input type="text" placeholder="eg: +91 90XXX 76XXX" name="contactPhone" value={jobForm.companyPhone} onChange={e=>{
                    setJobForm(prev=>({
                        ...prev,
                        companyPhone:e.target.value
                    }))
                }}/>
                <button id='submit'>Submit</button>
                </form>
            </div>
            </div>
        </>
    )
}