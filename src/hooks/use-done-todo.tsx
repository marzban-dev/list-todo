import { doneTodo } from "@/api/todo";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDoneTodoMutation = (id: number) => {
    const queryClient = useQueryClient();
    const key = ["todos"];
    const todoKey = ["todo", id];

    return useMutation(doneTodo, {
        onMutate: async (data) => {
            await queryClient.cancelQueries();
            const prevTodosQueryData = queryClient.getQueryData(key);
            const prevTodoQueryData = queryClient.getQueryData(todoKey);

            queryClient.setQueryData<Todo[]>(key, (prevQueryData) => {
                if (prevQueryData) {
                    const copyOfData = [...prevQueryData];
                    const todoIndex = copyOfData.findIndex((todo) => todo.id === id);
                    copyOfData[todoIndex] = { ...copyOfData[todoIndex], done: data.done };
                    return copyOfData;
                }

                return prevQueryData;
            });

            queryClient.setQueryData<Todo>(todoKey, (prevQueryData) => {
                if (prevQueryData) {
                    // const copyOfData = { ...prevQueryData , done : data.done};
                    return { ...prevQueryData , done : data.done};
                }

                console.log("s")

                return prevQueryData;
            });

            return { prevTodosQueryData, prevTodoQueryData };
        },
        onError: (_err, _data, ctx) => {
            queryClient.setQueryData(key, ctx!.prevTodosQueryData);
            queryClient.setQueryData(key, ctx!.prevTodoQueryData);
        },
        onSettled: () => {
            queryClient.invalidateQueries([key, todoKey]);
        },
    });
};
