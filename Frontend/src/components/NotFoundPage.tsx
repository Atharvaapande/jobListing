import {FaExclamationTriangle} from 'react-icons/fa'
import '../CSS/NotFoundPage.css'
export function NotFoundPage(){
    return (
        <>
            <div className="notFoundWrap">
                <FaExclamationTriangle className='notFoundIcon'/>
                <h1 className='notFoundTitle'>Not Found</h1>
                <h1 className='notFoundTitle'>404</h1>
            </div>
        </>
    )
}