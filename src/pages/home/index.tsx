import Spinner from "@/components/spinner";
import { useTodosQuery } from "@/hooks/use-todos";
import { useState } from "react";
import CreateButton from "./components/create-button";
import Filters from "./components/filters";
import RenderTodos from "./components/render-todos";
import ThemeButton from "./components/theme-button";
import LangButton from "./components/lang-button";

const HomePage = () => {
    const [activeFilter, setActiveFilter] = useState<TodosFilters>("new");
    const { data: todos } = useTodosQuery();

    //TODO complete notfound

    return (
        <div className="w-full flex justify-center items-center">
            <div className="flex justify-center items-center flex-col w-full max-w-[500px] gap-8">
                <Filters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
                {todos ? (
                    <RenderTodos todos={todos} filter={activeFilter} />
                ) : (
                    <div className="w-full h-full flex justify-center items-center mt-[80px]">
                        <Spinner size={30} />
                    </div>
                )}
            </div>
            <div className="fixed bottom-[20px] min-[550px]:bottom-[30px] right-[16px] min-[550px]:right-[30px] flex justify-center items-center flex-col gap-3 min-[550px]:gap-4">
                <LangButton />
                <ThemeButton />
                <CreateButton />
            </div>
        </div>
    );
};

export default HomePage;
