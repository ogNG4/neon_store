
import NeonItem from "./NeonItem";
import css from "./AvailableNeons.module.scss";

const AvailableNeons = () => {
    return(
        <div className={css.wrapper}>
            <h1 className={css.header}>Our neons!</h1>
            <div className={css.neons}>
                <NeonItem />
                <NeonItem />
                <NeonItem />
                <NeonItem />
            </div>
        </div>

    );
}

export default AvailableNeons;