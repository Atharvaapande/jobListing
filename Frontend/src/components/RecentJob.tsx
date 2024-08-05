import { useEffect, useState } from 'react';
import { JobCard } from './JobCard';

interface Props{
    isHome:boolean;
}

export function RecentJob({isHome}:Props){
    const[jobs,setJobs] = useState<Array<any> | null>(null);

    useEffect(()=>{
        fetch('/api/getJobs/',{headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }})
        .then(res=>res.json())
        .then(data=>{setJobs(data)})
    },[])
    return (
        <>
            
                    {isHome?jobs?.slice(0,3).map((job)=>(
                        <JobCard isHome={isHome} key={job._id} id={job._id} type={job.type} title={job.title} description={job.description} location={job.location} salary={job.salary}/>
                    )):jobs?.map((job)=>(
                        <JobCard isHome={isHome} key={job._id} id={job._id} type={job.type} title={job.title} description={job.description} location={job.location} salary={job.salary}/>))}

        </>
    )
}