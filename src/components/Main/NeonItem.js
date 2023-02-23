import {FiTwitter, FiInstagram, FiFacebook} from "react-icons/fi";
import css from "./NeonItem.module.scss";

const NeonItem = () =>{
    return(
        <div className={css['neon-item']}>
            <div className={css['neon-image']}>
                <FiTwitter/>
            </div>
            <div className={css['neon-info']}>
                <h1 className={css['neon-name']}>Twitter Neon</h1>
                <span className={css.price}>$29.99</span>
            </div>
        </div>
    );
}

export default NeonItem;