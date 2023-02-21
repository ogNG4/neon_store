
import BurgerMenu from './MobileNavbar/BurgerMenu';
import CartButton from '../Cart/CartButton';
import css from './Navbar.module.scss';

const Navbar = (props) => {
    return(
        <header className={css.header}>
            <div className={css.logo}>
                <h1 className={css['neon-logo']}>Neon</h1>
                <h1 className={css['neon-store']}>Store</h1>
            </div>
            <div className={css.buttons}>
                <CartButton />
                <BurgerMenu onShowNavbar={props.onShowNavbar} />
                
            </div>
            
            
        </header>
    );
};

export default Navbar;