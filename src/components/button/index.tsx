import classNames from "classnames";
import { ButtonProps } from "./types";
import Spinner from "@/components/spinner";

const Button: React.FC<ButtonProps> = ({
    children,
    loading,
    disabled,
    fullWidth,
    className,
    ...rest
}) => {
    const classes = classNames(
        {
            "w-[320px] h-[45px] rounded-full px-4 font-semibold transition-all": 1,
            "dark:bg-zinc-500 bg-zinc-400 dark:active:bg-zinc-600 active:bg-zinc-500 text-white":
                disabled,
            "bg-primary active:bg-primary-400 text-black active:translate-y-1": !disabled,
            "w-full": fullWidth,
        },
        className
    );

    return (
        <button {...rest} className={classes} disabled={disabled}>
            {loading ? <Spinner /> : children}
        </button>
    );
};

export default Button;
