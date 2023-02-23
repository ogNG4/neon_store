
import React,{ useState} from 'react';
import './global/Neons.scss'
import './App.scss';

import MobileProvider from './store/MobileProvider';
import Navbar from './components/Navbar/Navbar';
import MobileNavbar from './components/Navbar/MobileNavbar/MobileNavbar';
import About from './components/About/About';


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
      <About />
    </MobileProvider>
  )

}

export default App;
