import '../CSS/SingelJobPage.css'
import { LoaderFunctionArgs } from 'react-router-dom';

interface Company {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
    _id: string;
}
interface Props{
    job:{_id: string;
            title: string;
            type: string;
            description: string;
            location: string;
            salary: string;
            company: Company;};
}
function SingelJobPage({job}:Props){
    return (
        <>
            <div className="singelJobPage">
                <div className="jobInfoWrap">
                    <div className='leftPanel'>
                        <div className='jobInfo'>
                            <p className='jobInfoTitle2'>{job?.type}</p>
                            <h1 className='jobInfoTitle'>{job?.title}</h1>
                            <p className='jobInfoDescriptionContent'>{job?.location}</p>
                            <div className='br'></div>
                            <h3 className='jobInfoTitle2'>Job Description</h3>
                            <p className='jobInfoDescriptionContent'>{job?.description}</p>
                            <h3 className='jobInfoTitle2'>Salary</h3>
                            <p className='jobInfoDescriptionContent'>{job?.salary}</p>
                        </div>
                    </div>
                    <div className='rightPanel'>
                        <div className="companyInfo">
                            <h3 className='jobInfoTitle2'>Company Info</h3>
                            <h1 className='jobInfoTitle'>{job?.company.name}</h1>
                            <p className='jobInfoDescriptionContent'>{job?.company.description}</p>
                            <h3 className='jobInfoTitle2'>Contact Email</h3>
                            <p className='jobInfoDescriptionContent'>{job?.company.contactEmail}</p>
                            <h3 className='jobInfoTitle2'>Contact Phone</h3>
                            <p className='jobInfoDescriptionContent'>{job?.company.contactPhone}</p>
                        </div>
                        <div className='manageJob'>
                            <h3 className="jobInfoTitle2">Manage Job</h3>
                            <button className='jobButton'>Edit Job</button>
                            <button className='jobButton'>Delete Job</button>
                        </div>
                    </div>
                </div>
            </div>
    </>
    )
}

interface Params {
    id: string;
}

async function jobLoder ({params}:LoaderFunctionArgs):Promise<any>{
    const response = await fetch(`http://localhost:3001/getJobs/${params.id}`)
    return response.json();
}
export {SingelJobPage as default, jobLoder};