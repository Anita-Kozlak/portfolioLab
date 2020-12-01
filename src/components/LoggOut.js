import React from "react";
import HomeLoggNavHeader from "./HomeNavHeader";
import { Link  } from 'react-router-dom'
import Decoration from '../components/Decoration';


const LoggOut = () => {
    return (
        <div className="loggOut">
            <HomeLoggNavHeader />
            <div className="loggOut__container">
                <h1>Wylogowanie nastąpiło pomyślnie!</h1>
                <Decoration />
                <Link to="/"><button>Strona główna</button></Link> 
            </div>
        </div>
    )
}
export default LoggOut