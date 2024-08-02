
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export function MainLayout(){
    return (
        <>
        
            <NavBar/>
            <Outlet/>
        </>
    )
}