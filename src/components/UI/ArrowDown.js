import {AiOutlineArrowDown} from 'react-icons/ai';

import css from './ArrowDown.module.scss';
const ArrowDown = () => {
    return(
        <button className={css['arrow-btn']}>
           <AiOutlineArrowDown />
        </button>
    )
}

export default ArrowDown;