import React from 'react';


import LookingFor from './lookingFor';
import Leads from './leads';
import Mechanisms from './mechanisms';
import TreatCoin from './treatcoin';
import MeetTreatCoin from './meetTreatcoin';
import WhoAreWe from './who';
import Partners from './partners';
import AboutUs from './aboutUs';
import TryYourself from './tryYourself';

const Home = () => {
    const HomeDeskTopBack1 = {
        backgroundImage: `url(${require('../../../asset/image/Home1_desktop.png')})`,
        backgroundSize: 'cover', // Cover the entire div
        backgroundPosition: 'center', // Center the image
        width: '781px', // Example height
        height: '670px' // Example width
    };
    const HomeMobileBack1 = {
      backgroundImage: `url(${require('../../../asset/image/Home1_mobile.png')})`,
      backgroundSize: 'cover', // Cover the entire div
      backgroundPosition: 'center', // Center the image
      width: '400px', // Example height
      height: '343.15px' // Example width
  };

  return (
    <div>
        <LookingFor />
        <Leads />
        <Mechanisms />
        <TreatCoin />
        <MeetTreatCoin />
        <WhoAreWe />
        <Partners />
        <AboutUs />
        <TryYourself />
    </div>
  )
}

export default Home;