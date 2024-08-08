import { useEffect } from "react";
import SingelJobPage from "../components/SingelJobPage"
import { useLoaderData ,useRevalidator} from "react-router-dom"


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

function SingelJob(){
    const job = useLoaderData() as Job;
    const revalidator = useRevalidator();

    useEffect(() => {
        revalidator.revalidate();  // Manually trigger revalidation
    }, []);
    return (
        <>
            <SingelJobPage job={job}/>
        </>
    )
}
export default SingelJob;