import classNames from "classnames";
import { BadgeProps } from "./types";

const Badge: React.FC<BadgeProps> = ({ active, id, onChange, children }) => {
    const classes = classNames({
        "px-6 min-[550px]:px-8 py-1 cursor-pointer inline-block active:scale-[0.8] transition-all rounded-full duration-100 dark:text-white text-black": 1,
        "bg-primary text-white": active,
        "dark:bg-secondary-500 bg-zinc-300": !active,
    });

    return (
        <>
            <label htmlFor={id} className={classes}>
                {children}
            </label>
            <input
                id={id}
                type="radio"
                onChange={() => onChange(id)}
                checked={active}
                className="hidden"
            />
        </>
    );
};

export default Badge;
