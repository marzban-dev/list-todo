import DoneButton from "@/components/done-button";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { TodoProps } from "./types";
import { useTranslation } from "react-i18next";

const Todo: React.FC<TodoProps> = ({ todo, id, done }) => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();

    const textClasses = classNames({
        "line-through": done,
    });

    const onClick = () => navigate(`/todo/${id}`);

    return (
        <div
            onClick={onClick}
            className="w-full h-[45px] min-[550px]:h-[50px] flex justify-start items-center gap-3 px-4 dark:bg-secondary-400 bg-secondary-900 bg-opacity-[15%] rounded-full border border-secondary-600 text-black dark:text-white cursor-pointer dark:hover:bg-secondary-500"
            style={{ direction: i18n.language === "fa" ? "rtl" : "ltr" }}
        >
            <DoneButton id={id} done={done} />
            <span className={textClasses}>{todo}</span>
        </div>
    );
};

export default Todo;
