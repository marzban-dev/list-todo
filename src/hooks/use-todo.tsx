import { useQuery } from "@tanstack/react-query";
import { fetchTodo } from "../api/todo";

export const useTodoQuery = (id: number) => {
    return useQuery(["todo", id], () => fetchTodo(id));
};
