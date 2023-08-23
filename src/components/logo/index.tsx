import classNames from "classnames";
import { LogoProps } from "./types";

const Logo: React.FC<LogoProps> = ({ className = "text-[18px]" }) => {
    return (
        <div
            className={classNames(
                "font-[cursive] font-semibold dark:text-primary-600 text-primary-500",
                className
            )}
        >
            Todo<span className="text-primary">App</span>
        </div>
    );
};

export default Logo;
