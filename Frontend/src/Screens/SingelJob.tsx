import SingelJobPage from "../components/SingelJobPage"
import { useLoaderData } from "react-router-dom"

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

export function SingelJob(){
    const job = useLoaderData() as Job;
    return (
        <>
            <SingelJobPage job={job}/>
        </>
    )
}