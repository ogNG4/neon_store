
import React,{ useState} from 'react';
import './global/Neons.scss'
import './App.scss';

import MobileProvider from './store/MobileProvider';
import Navbar from './components/Navbar/Navbar';
import MobileNavbar from './components/Navbar/MobileNavbar/MobileNavbar';
import About from './components/About/About';
import AvailableNeons from './components/Main/AvailableNeons';


function App() {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  const showMobileNavbarHandler = () => {
    setShowMobileNavbar(true);
  };

  const hideMobileNavbarHandler = () => {
    setShowMobileNavbar(false);
  };

  const scrollHandler = () => {
    const availableNeons = document.getElementById('available-neons');

    if(availableNeons){
      availableNeons.scrollIntoView({behavior: 'smooth'});
    }
    

  }

  

  return(
    <MobileProvider>
      { showMobileNavbar && <MobileNavbar onHideNavbar={hideMobileNavbarHandler}/>}
      <Navbar onShowNavbar={showMobileNavbarHandler} />
      <About onScroll={scrollHandler}/>
      <main id='available-neons'>
        <AvailableNeons />
      </main>
    </MobileProvider>
  )

}

export default App;
