import { Link } from 'react-router-dom'
import '../CSS/Page2.css'

export function Page2(){
    return(
        <>
            <div className="page2">
                <h1 className='showcaseContainerTitle'>For <span>Enterprises</span></h1>
                <div className='bentoContainer'>
                    <div className='leftCol'>
                        <div className='leftColRow1'>
                            <div className="bento bento1"><div><Link className='Link2' to={'/addJobs'}>Hire World's Best Engineers</Link></div></div>
                            <div className="bento bento2"><div><Link className='Link2' to={'/addJobs'}>World Class IOS Developers</Link></div></div>
                            <div className="bento bento3"><div><Link className='Link2' to={'/addJobs'}>Save Your Time and Money Use JobSphere</Link></div></div>
                        </div>
                        <div className='leftColRow2'>
                            <div className="bento bento4"><div><Link className='Link2' to={'/addJobs'}>Find The Best Fit For Your Company</Link></div></div>
                            <div className="bento bento5"><div><Link className='Link2' to={'/addJobs'}>Discover The Range Of Talented Job Seekers</Link></div></div>
                        </div>
                    </div>
                    <div className="rightCol bento"><div><Link className='Link2' to={'/addJobs'}>Get Ahead Of Your Competitors</Link></div></div>
                </div>
            </div>
        </>
    )
}