import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "@/api/todo";

export const useCreateTodoMutation = () => {
    const queryClient = useQueryClient();

    return useMutation(createTodo, {
        onSuccess: (data) => {
            queryClient.setQueryData<Todo[]>(["todos"], (prevQueryData) => {
                if (prevQueryData) return [...prevQueryData, data];
                return prevQueryData;
            });
        },
        onSettled: () => {
            queryClient.invalidateQueries(["todos"]);
        },
    });
};
