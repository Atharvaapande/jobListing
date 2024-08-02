import { useEffect, useState } from 'react';
import '../CSS/Page3.css'
// import jobs from '../Json/jobs.json'
import { JobCard } from './JobCard'
import {FaExternalLinkAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'

interface Props{
    isHome:boolean;
}

export function Page3({isHome=false}:Props){
    const[jobs,setJobs] = useState<Array<any> | null>(null);

    useEffect(()=>{
        fetch('http://localhost:3001/getJobs',{headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }})
        .then(res=>res.json())
        .then(data=>{setJobs(data); console.log(data)})
    },[])

    return (
        <>
            <div className={isHome?"page3":'jobsPage'}>
                <h1 className="page3Title">{isHome?'For Talents':'Browse Jobs'}</h1>
                <div className='jobList'>
                    {isHome?jobs?.slice(0,3).map((job)=>(
                        <JobCard isHome={isHome} key={job._id} type={job.type} title={job.title} description={job.description} location={job.location} salary={job.salary}/>
                    )):jobs?.map((job)=>(
                        <JobCard isHome={isHome} key={job._id} type={job.type} title={job.title} description={job.description} location={job.location} salary={job.salary}/>))}
                </div>
                {isHome && <Link className='Link' to={'/jobs'} ><button className="moreJobs">View More Jobs<FaExternalLinkAlt/></button></Link>}
            </div>
        </>
    )
}