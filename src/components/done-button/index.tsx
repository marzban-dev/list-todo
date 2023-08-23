import IconCheck from "@/components/svg-components/check";
import { useDoneTodoMutation } from "@/hooks/use-done-todo";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { DoneButtonProps } from "./types";

const DoneButton: React.FC<DoneButtonProps> = ({ id, done: initialValue }) => {
    const [done, setDone] = useState(initialValue);
    const { mutateAsync: doneTodo } = useDoneTodoMutation(id);

    useEffect(() => {
        setDone(initialValue);
    }, [initialValue]);

    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        
        setDone(!done);

        setTimeout(async () => {
            await doneTodo({ id, done: !done });
        }, 500);
    };

    const classes = classNames({
        "border-2 rounded-full h-[25px] w-[25px] flex justify-center items-center transition-colors active:scale-[0.85] transition-transform duration-100": 1,
        "border-primary": done,
        "border-secondary-800": !done,
    });

    const iconClasses = classNames("fill-primary h-[15px] mt-px transition-opacity", {
        "opacity-100": done,
        "opacity-0": !done,
    });

    return (
        <button onClick={onClick} className={classes}>
            <IconCheck className={iconClasses} />
        </button>
    );
};

export default DoneButton;
