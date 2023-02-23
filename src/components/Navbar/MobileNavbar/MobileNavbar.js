import Modal from "../../UI/Modal";
import css from "./MobileNavbar.module.scss";

const MobileNavbar = (props) => {
  return (
    <Modal onClose={props.onHideNavbar}>
      <nav className={css.navbar}>
        <a onClick={props.onHideNavbar} href="#/" className={css["menu-item"]}>
          Home
        </a>
        <a  onClick={props.onHideNavbar} href="#/" className={css["menu-item"]}>
          Shop
        </a>
        <a onClick={props.onHideNavbar}  href="#/" className={css["menu-item"]}>
          Creator
        </a>
        <a onClick={props.onHideNavbar} href="#/" className={css["menu-item"]}>
          Contact
        </a>
      </nav>
    </Modal>
  );
};

export default MobileNavbar;
