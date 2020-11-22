import React from "react";
import HomeNavHeader from './HomeNavHeader'
import { Link } from "react-router-dom";


const HomeMenuHeader = () => {
    return (
        <div className="header__menu">
            <img className="heroImage" src="HeroImage.png" alt="heroImage"></img>
            <div className="header__menu-right">
                <HomeNavHeader />
                <span className="header__text">Zacznij pomagać! </span><br/><span className="header__text">Oddaj niechciane rzeczy w zaufane ręce</span>
                <img src="Decoration.png" alt="decorationImage"></img>
                <div className="menu__buttons">
                    <Link to="/login"><button>Oddaj rzeczy</button></Link>
                    <Link to="/login"><button>Zorganizuj zbiórkę</button></Link>
                </div>
             </div>
        </div>
        
    )
}
export default HomeMenuHeader