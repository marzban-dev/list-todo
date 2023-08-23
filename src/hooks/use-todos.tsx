import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../api/todo";

export const useTodosQuery = () => {
    return useQuery(["todos"], fetchTodos, {
        select: (data) => data.reverse(),
    });
};
