import { useMemo } from "react";
import EmptyState from "@/components/empty-state";
import Todo from "./components/todo";
import { RenderTodosProps } from "./types";
import { useTranslation } from "react-i18next";

const RenderTodos: React.FC<RenderTodosProps> = ({ todos, filter }) => {
    const { t } = useTranslation();

    const renderTodos = useMemo(() => {
        return todos
            .filter((todo) => {
                if (filter === "all") return todo;
                if (filter === "done") return todo.done === true;
                return todo.done !== true;
            })
            .map((todo) => <Todo {...todo} key={todo.id} />);
    }, [todos, filter]);

    return (
        <div className="flex justify-start items-center flex-col gap-4 w-full max-[550px]:px-4 pb-[300px]">
            {renderTodos.length !== 0 ? (
                renderTodos
            ) : (
                <EmptyState text={t("empty-state-text")} className="mt-[40px] min-[550px]:mt-[80px]" />
            )}
        </div>
    );
};

export default RenderTodos;
