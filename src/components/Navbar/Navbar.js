
import css from './Navbar.module.scss';

const Navbar = () => {
    return(
        <header className={css.header}>
            <div className={css.logo}>
                <h1 className={css['neon-logo']}>Neon</h1>
                <h1 className={css['neon-store']}>Store</h1>
            </div>
        </header>
    );
};

export default Navbar;