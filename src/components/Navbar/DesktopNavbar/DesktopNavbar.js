import Modal from "../../UI/Modal";
import css from "./DesktopNavbar.module.scss";

const DesktopNavbar = (props) => {
  return (
    <nav className={css.navbar}>
      <a href="#/" className={css["menu-item"]}>
        Home
      </a>
      <a href="#/" className={css["menu-item"]}>
        Shop
      </a>
      <a href="#/" className={css["menu-item"]}>
        Creator
      </a>
      <a href="#/" className={css["menu-item"]}>
        Contact
      </a>
    </nav>
  );
};

export default DesktopNavbar;
