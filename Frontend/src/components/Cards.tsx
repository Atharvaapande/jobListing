import { Link } from 'react-router-dom';
import '../CSS/Cards.css'

interface Props{
    title:string;
    description:string;
    buttonText:string;
    to:string;
}
export function Cards({title,description,buttonText,to}:Props){
    return (
        <>
            <div className="card">
                <h1 className="cardTitle">{title}</h1>
                <p className="cardDescription">{description}</p>
                <Link to={to} className='navLink'><button className="cardButton">{buttonText}</button></Link>
            </div>
        </>
    )
}