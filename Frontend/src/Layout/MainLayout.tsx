import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/ReactToastify.css'
export function MainLayout(){
    return (
        <>
            <ToastContainer className={'toast-success-container'} progressClassName={'progressBar'}/>
            <NavBar/>
            <Outlet/>
        </>
    )
}