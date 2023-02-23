import {AiOutlineArrowDown} from 'react-icons/ai';

import css from './ArrowDown.module.scss';
const ArrowDown = (props) => {
    return(
        <button className={css['arrow-btn']} onClick={props.onScroll}>
           <AiOutlineArrowDown />
        </button>
    )
}

export default ArrowDown;