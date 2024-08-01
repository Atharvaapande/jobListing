import '../CSS/Page3.css'
// import jobs from '../Json/jobs.json'
// import { JobCard } from './JobCard'
// import {FaExternalLinkAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'

interface Props{
    isHome:boolean;
}

export function Page3({isHome}:Props){

    return (
        <>
            <div className={isHome?"page3":'jobsPage'}>
                <h1 className="page3Title">{isHome?'For Talents':'Browse Jobs'}</h1>
                <div className='jobList'>
                    {/* {isHome?jobs.slice(0,3).map((job)=>(
                        <JobCard key={job.id} type={job.type} title={job.title} description={job.description} location={job.location} salary={job.salary}/>
                    )):jobs.map((job)=>(
                        <JobCard key={job.id} type={job.type} title={job.title} description={job.description} location={job.location} salary={job.salary}/>))} */}
                </div>
                <Link className='Link' to={'/jobs'} ><button className="moreJobs">{isHome?'View More Jobs ':''}</button></Link>
            </div>
        </>
    )
}