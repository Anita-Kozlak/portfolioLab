import React, { useCallback, useState } from "react";
import Fundations from "./Fundations";
import Local from "./Local";
import Organizations from "./Organizations";


const WhoWeHelp = () => {

    const [fundation, setFundation] = useState(true)
    const [organization, setOrganization] = useState(false)
    const [local, setLocal] = useState(false)

    const changeFundation = () => {
        setFundation(true)
        setOrganization(false)
        setLocal(false)

    }
    const changeOrganization = () => {
        setOrganization(true)
        setFundation(false)
        setLocal(false)

    }

    const changeLocal = () => {
        setLocal(true)
        setFundation(false)
        setOrganization(false)

    }
    return (
        <>
            <div className="whoWeHelp" id="whowehelp">
            <h1>Komu pomagamy</h1>
            <img src="Decoration.png" alt="decorationImage"></img>
            <div className="whoWeHelp__buttons">
                    <button onClick={changeFundation}>Fundacjom</button>
                    <button onClick={changeOrganization}>Organizacjom pozarządowym</button>
                    <button onClick={changeLocal}>Lokalnym zbiórkom</button>
                </div>

            </div>
            {fundation && <Fundations />}
            {organization && <Organizations />}
            {local && <Local />}
        </>
    )
}
export default WhoWeHelp