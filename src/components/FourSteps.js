import React from "react";
import { Link } from "react-router-dom";

const FourSteps = () => {
    return (
        <>
        <div className="fourSteps__heading" id="foursteps">
        <h1>Wystarczą 4 proste kroki</h1>
        <img src="Decoration.png" alt="decorationImage"></img>
        </div>
            <div className="fourSteps">
                <div className="fourSteps__container">
                    
                    <div className="fourSteps__columns">
                        <div className="fourStep__column">
                            <img src="Icon.png" alt="Icon"></img>
                            <h2>Wybierz rzeczy</h2>
                            <h3>ubrania, zabawki, sprzęt i inne</h3>
                        </div>
                        <div className="fourStep__column">
                            <img src="Icon2.png" alt="Icon"></img>
                            <h2>Spakuj je</h2>
                            <h3>wykorzystaj z worków na śmieci</h3>
                        </div>
                        <div className="fourStep__column">
                            <img src="Icon3.png" alt="Icon"></img>
                            <h2>Zdecyduj komu chcesz pomóc</h2>
                            <h3>wybierz zaufane miejsce</h3>
                        </div>
                        <div className="fourStep__column">
                            <img src="Icon4.png" alt="Icon"></img>
                            <h2>Zamów kuriera</h2>
                            <h3>kurier przyjedzie w dogodnym terminie</h3>
                        </div>

                    </div>
                </div>
            </div>
            <div className="fourSteps__button">
            <Link to="/login"><button >Oddaj rzeczy</button></Link>
            </div>

        </>
    )
}
export default FourSteps