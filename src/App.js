
import React,{Fragment, useState} from 'react';
import './global/Neons.scss'
import './App.scss';

import MobileProvider from './store/MobileProvider';
import Navbar from './components/Navbar/Navbar';
import MobileNavbar from './components/Navbar/MobileNavbar/MobileNavbar';


function App() {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  const showMobileNavbarHandler = () => {
    setShowMobileNavbar(true);
  };

  const hideMobileNavbarHandler = () => {
    setShowMobileNavbar(false);
  };
  

  return(
    <MobileProvider>
      { showMobileNavbar && <MobileNavbar onHideNavbar={hideMobileNavbarHandler}/>}
      <Navbar onShowNavbar={showMobileNavbarHandler} />
    </MobileProvider>
  )

}

export default App;
