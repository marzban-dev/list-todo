import Spinner from "@/components/spinner";
import { useTodoQuery } from "@/hooks/use-todo";
import classNames from "classnames";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import DoneButton from "../../components/done-button";
import timeDifference from "../../utils/time-difference";
import { useTranslation } from "react-i18next";

const TodoPage = () => {
    const { t, i18n } = useTranslation();
    const params = useParams<{ id: string }>();
    const { data: todo } = useTodoQuery(Number(params.id));

    const lastUpdated = useMemo(() => {
        if (todo) {
            const date = new Date(todo?.updated_at);
            const days = timeDifference(date, new Date());
            return `${t("todo.updated-date-text")} ${
                days === 0 ? t("todo.updated-today-text") : days
            } ${days === 0 ? "" : t("todo.updated-past-text")}`;
        }
    }, [todo]);

    const textClasses = classNames({
        "dark:text-white text-black text-[16px]": 1,
        "line-through": todo?.done,
    });

    return todo ? (
        <div className="flex justify-center items-center w-full max-[550px]:px-4">
            <div
                className="flex justify-center items-center flex-col w-full max-w-[500px] gap-4"
                style={{ direction: i18n.language === "fa" ? "rtl" : "ltr" }}
            >
                <div className="flex justify-start items-center gap-3 pb-3 border-b border-secondary-500 w-full px-4">
                    <DoneButton done={todo.done} id={todo.id} />
                    <div className="flex flex-col justify-start items-start gap-1">
                        <span className={textClasses}>{todo.todo}</span>
                        <span className="dark:text-[rgb(180,180,180)] text-[rgb(110,110,110)] text-[14px]">
                            {lastUpdated}
                        </span>
                    </div>
                </div>
                <p className="dark:text-[rgb(180,180,180)] text-[rgb(110,110,110)] w-full px-4 max-w-full whitespace-pre-wrap">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur vitae
                    harum quod! Reiciendis dignissimos perferendis praesentium natus eos. Labore
                    tempore architecto laudantium in aspernatur ducimus debitis, delectus blanditiis
                    asperiores quas!
                </p>
            </div>
        </div>
    ) : (
        <Spinner size={30} />
    );
};

export default TodoPage;
