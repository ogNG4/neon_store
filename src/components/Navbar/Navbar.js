import { useState, useEffect } from "react";
import BurgerMenu from "./MobileNavbar/BurgerMenu";
import DesktopNavbar from "./DesktopNavbar/DesktopNavbar";
import CartButton from "../Cart/CartButton";
import css from "./Navbar.module.scss";

const Navbar = (props) => {
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

  return (
    <header className={css.header}>
      <div className={css.logo}>
        <h1 className={css["neon-logo"]}>Neon</h1>
        <h1 className={css["neon-store"]}>Store</h1>
      </div>

      {!isMobile && (
        <div className={css['desktop-nav']}>
            <DesktopNavbar />
            <CartButton/>
        </div>
      )}

      

      {isMobile && (
        <div className={css.buttons}>
          <CartButton />
          <BurgerMenu onShowNavbar={props.onShowNavbar} />
        </div>
      )}
    </header>
  );
};

export default Navbar;
