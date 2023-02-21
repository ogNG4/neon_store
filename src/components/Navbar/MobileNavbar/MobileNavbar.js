import Modal from "../../UI/Modal";
import css from "./MobileNavbar.module.scss";

const MobileNavbar = (props) => {
  return (
    <Modal onClose={props.onHideNavbar}>
      <div className={css.navbar}>
        <a onClick={props.onHideNavbar} href="#/" className={css["menu-item"]}>
          About
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
      </div>
    </Modal>
  );
};

export default MobileNavbar;