import React from "react";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import FourSteps from "./FourSteps";
import HomeMenuHeader from "./HomeMenuHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import WhoWeHelp from "./WhoWeHelp";


const Home = () => {
   return (
       <>
            <HomeMenuHeader />
            <HomeThreeColumns />
            <FourSteps />
            <AboutUs />
            <WhoWeHelp />
            <Contact />
            
       </>
   )
}

export default Home