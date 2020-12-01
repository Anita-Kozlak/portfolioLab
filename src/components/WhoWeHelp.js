import React, { useState } from "react";
import Fundations from "./Fundations";
import Local from "./Local";
import Organizations from "./Organizations";




const WhoWeHelp = () => {

    const [fundation, setFundation] = useState(true)
    const [organization, setOrganization] = useState(false)
    const [local, setLocal] = useState(false)
    const [border1, setBorder1] = useState('none')
    const [border2, setBorder2] = useState('none');
    const [border3, setBorder3] = useState('none');


    const changeFundation = () => {
        setFundation(true)
        setOrganization(false)
        setLocal(false)
        setBorder1('1px solid #3C3C3C');
        setBorder2('none')
        setBorder3('none')

    }
    const changeOrganization = () => {
        setOrganization(true)
        setFundation(false)
        setLocal(false)
        setBorder2('1px solid #3C3C3C');
        setBorder1('none')
        setBorder3('none')

    }

    const changeLocal = () => {
        setLocal(true)
        setFundation(false)
        setOrganization(false)
        setBorder3('1px solid #3C3C3C');
        setBorder1('none')
        setBorder2('none')


    }
    return (
      <>
        <div className="whoWeHelp" id="whowehelp">
          <h1>Komu pomagamy</h1>
          <img src="Decoration.png" alt="decorationImage"></img>
          <div className="whoWeHelp__buttons">
            <button onClick={changeFundation}>Fundacjom</button>
            <button onClick={changeOrganization}>
              Organizacjom pozarządowym
            </button>
            <button onClick={changeLocal}>Lokalnym zbiórkom</button>
          </div>
        </div>
        {fundation && <Fundations />}
        {organization && <Organizations />} 
        {local && <Local />} 
        <div className="pages">
          <span style={{ border: border1 }} onClick={changeFundation}>
            1
          </span>
          <span style={{ border: border2 }} onClick={changeOrganization}>
            2
          </span>
          <span style={{ border: border3 }} onClick={changeLocal}>
            3
          </span>
        </div>
      </>
    );
}
export default WhoWeHelp