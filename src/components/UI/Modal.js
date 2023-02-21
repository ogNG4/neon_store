import { Fragment } from "react";
import  ReactDOM  from "react-dom";
import css from "./Modal.module.scss";

const Backdrop = (props) => {
    return <div className={css.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
    return <div className={css.modal}>{props.children}</div>;
};


const Modal = (props) => {
    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById('overlays'))}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlays'))}
        </Fragment>
    )
};

export default Modal;