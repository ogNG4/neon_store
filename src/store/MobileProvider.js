import {useState, useEffect} from 'react';
import MobileContext from './mobile-context';

const MobileProvider = (props) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const checkIfMobile = () => {
        if (window.innerWidth <= 768) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      };
      checkIfMobile();
      window.addEventListener("resize", checkIfMobile);
  
      return () => {
        window.removeEventListener("resize", checkIfMobile);
      };
    }, []);

    return(
        <MobileContext.Provider value={{isMobile}}>
            {props.children}
        </MobileContext.Provider>
    )
}

export default MobileProvider;