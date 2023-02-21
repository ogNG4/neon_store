import {CgMenu} from 'react-icons/cg';
import css from './BurgerMenu.module.scss';

const BurgerMenu = (props) => {
    return(
        <div className={css['burger-menu']}>
            <button className={css['burger-btn']} onClick={props.onShowNavbar}>
                <CgMenu />
            </button>
            
        </div>
    );
};

export default BurgerMenu;
