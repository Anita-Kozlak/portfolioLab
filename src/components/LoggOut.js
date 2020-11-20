import React from "react";
import HomeLoggNavHeader from "./HomeNavHeader";
import { Link  } from 'react-router-dom'


const LoggOut = () => {
    return (
        <div className="loggOut">
            <HomeLoggNavHeader />
            <div className="loggOut__container">
                <h1>Wylogowanie nastąpiło pomyślnie!</h1>
                <img src="Decoration.png" alt="decorationImage"></img>
                <Link to="/"><button>Strona główna</button></Link> 
            </div>
        </div>
    )
}
export default LoggOut