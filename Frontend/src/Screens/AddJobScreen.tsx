import { useState } from 'react'
import '../CSS/AddJobScreen.css'

export function AddJobScreen(){
    const [jobForm,setJobForm] = useState({
        jobType:'Full Time',
        jobTitle:'',
        jobDescription:'',
        jobSalary:'under 50k',
        joblocation:'',
        companyName:'',
        compannyDecsription:'',
        companyEmail:'',
        companyPhone:''
    })
    return (
        <>
        <div className='ajp'>
            <div className="addJobPage">
                <form action="">
                <h1>Add Job</h1>
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
                    <option value="under">under 50k</option>
                    <option value="between">between 50k to 75k</option>
                    <option value="above">above 75k</option>
                    <option value="confidenntial">Confidential</option>
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
                <textarea name="companyDescription" id="companyDescription" placeholder="Add your company information here." value={jobForm.compannyDecsription} onChange={e=>{
                    setJobForm(prev=>({
                        ...prev,
                        compannyDecsription:e.target.value
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
                </form>
            </div>
            </div>
        </>
    )
}