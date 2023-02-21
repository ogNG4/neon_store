import { useContext } from "react";

import MobileContext from "../../store/mobile-context";
import BurgerMenu from "./MobileNavbar/BurgerMenu";
import DesktopNavbar from "./DesktopNavbar/DesktopNavbar";
import CartButton from "../Cart/CartButton";
import css from "./Navbar.module.scss";

const Navbar = (props) => {
    const {isMobile} = useContext(MobileContext);


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
