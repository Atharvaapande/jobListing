import { Cards } from "./Cards";
import '../CSS/Hero.css'

export function Hero() {
    return (
        <div className="hero">
                <div className="circle"></div>
                <div className="heroContent1"></div>
                <div className="heroContent">
                    <h1 className="contentTitle">The all-in-one hiring solution,<br/> now with AI</h1>
                    <h3 className="contentDescription">Hire top tech, design, marketing talent. Innovate, fast.</h3>
                    <div className="contentCards">
                        <Cards to="/jobs" title="For Developers" description="Browse our jobs and kick start your career today" buttonText="Browse Jobs"/>
                        <Cards to='/addJobs' title="For Employers" description="List job to find the perfect developer for the role" buttonText="Add Job"/>
                    </div>
            </div>
        </div>
    )
}
