import { useState } from 'react';
import '../CSS/JobCard.css'
import {Link} from 'react-router-dom'
import {FaExternalLinkSquareAlt,FaMapMarker} from 'react-icons/fa'

interface Props {
    type:string;
    title:string;
    description:string;
    location:string;
    salary:string;
    isHome:boolean;
}
export function JobCard({isHome,type,title,description,location,salary}:Props){
    const [showDescription,setShowDescription]=useState(false);

    return (
        <>
            <div className={isHome?"jobCardWrapHome":'jobCardWrap'}>
                <p className='jobType'>{type}</p>
                <h2 className='jobTitle'>{title}</h2>
                <p className="jobDescription">{showDescription?description:description.slice(0,150)+'. . .'}</p>
                <button className='showDescriptionBtn' onClick={()=>{setShowDescription(prev=>!prev)}}>{showDescription?'Show Less':'Show More'}</button>
                <div>
                    <div>
                        <p className="jobLocation"><FaMapMarker/> {location}</p>
                        <p className="jobSalary">{salary}</p>
                    </div>
                    <Link to={'/jobs'} className='Link'><button className='jobButton'>Read More <FaExternalLinkSquareAlt/></button></Link>
                </div>
            </div>
        </>
    )
}