import{AiOutlineShoppingCart} from 'react-icons/ai';
import css from '../Navbar/MobileNavbar/BurgerMenu.module.scss';

const CartButton = (props) => {
    return(
        <div className={css.cart}>
            <button className={css['cart-btn']}>
                <span className={css.count}>0</span>
                <AiOutlineShoppingCart />
            </button>
            
        </div>
    );
};

export default CartButton;