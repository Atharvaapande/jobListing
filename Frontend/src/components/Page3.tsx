import '../CSS/Page3.css'
import {FaExternalLinkAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { RecentJob } from './RecentJob';

interface Props{
    isHome:boolean;
}

export function Page3({isHome}:Props){
    

    return (
        <>
            <div className={isHome?"page3":'jobsPage'}>
                <h1 className={isHome?"page3TitleHome":'page3Title'}>{isHome?'For Talents':'Browse Jobs'}</h1>
                <div className={isHome?'jobListHome':'jobList'}>
                <RecentJob isHome={isHome}/>
                </div>
                {isHome && <Link className='Link' to={'/jobs'} ><button className="moreJobs">View More Jobs<FaExternalLinkAlt/></button></Link>}
            </div>
        </>
    )
}