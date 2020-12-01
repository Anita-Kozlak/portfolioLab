import { HashLink as Link } from "react-router-hash-link";
import React, {useContext} from 'react'
import { AuthContext } from './auth'
import Decoration from '../components/Decoration'
import Icon1 from '../assets/Icon.png';
import Icon2 from '../assets/Icon2.png';
import Icon3 from '../assets/Icon3.png';
import Icon4 from '../assets/Icon4.png';


  

const FourSteps = () => {
      const { currentUser } = useContext(AuthContext);
    return (
      <>
        <div className="fourSteps__heading" id="foursteps">
          <h1>Wystarczą 4 proste kroki</h1>
          <Decoration />
        </div>
        <div className="fourSteps">
          <div className="fourSteps__container">
            <div className="fourSteps__columns">
              <div className="fourStep__column">
                <img src={Icon1} alt="Icon"></img>
                <h2>Wybierz rzeczy</h2>
                <h3>ubrania, zabawki, sprzęt i inne</h3>
              </div>
              <div className="fourStep__column">
                <img src={Icon2} alt="Icon"></img>
                <h2>Spakuj je</h2>
                <h3>
                  wykorzystaj z <br></br>worków na śmieci
                </h3>
              </div>
              <div className="fourStep__column">
                <img src={Icon3} alt="Icon"></img>
                <h2>Zdecyduj komu chcesz pomóc</h2>
                <h3>
                  wybierz zaufane <br></br> miejsce
                </h3>
              </div>
              <div className="fourStep__column">
                <img src={Icon4} alt="Icon"></img>
                <h2>Zamów kuriera</h2>
                <h3>
                  kurier przyjedzie <br></br> w dogodnym terminie
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="fourSteps__button">
          {currentUser ? (
            <Link smooth to="#formStepOne">
              <Link to="/givethings">
                <button>Oddaj rzeczy</button>
              </Link>
            </Link>
          ) : (
            <Link to="/login">
              <button>Oddaj rzeczy</button>
            </Link>
          )}
        </div>
      </>
    );
}
export default FourSteps