import classNames from "classnames";
import IconCircleExclamation from "@/components/svg-components/circle-exclamation";
import { TextareaProps } from "./types";

const Textarea: React.FC<TextareaProps> = ({
    error,
    errorMessage,
    fullWidth,
    className,
    ...rest
}) => {
    const classes = classNames(
        {
            "hover:border-primary pt-2 focus:border-primary w-[350px] border-secondary-800 border-2 bg-transparent rounded-lg outline-none px-4 transition-colors dark:hover:border-primary-200 dark:focus:border-primary-200 dark:text-white dark:border-transparent dark:bg-secondary-400 resize-none": 1,
            "w-full": fullWidth,
        },
        className
    );

    return (
        <div>
            <textarea {...rest} className={classes} />
            {error && errorMessage && (
                <div className="mt-2 flex items-center justify-start gap-2 px-3 text-[16px] font-medium text-black dark:text-white sm:px-4">
                    <IconCircleExclamation className="h-[16px] fill-red-600 mt-[2px]" />
                    <span>{errorMessage}</span>
                </div>
            )}
        </div>
    );
};

export default Textarea;
