import axios from "@/configs/axios";
import {
    CreateTodoRequestParams,
    CreateTodoResponse,
    DoneTodoRequestParams,
    DoneTodoResponse,
    FetchTodoResponse,
    FetchTodosResponse,
} from "./types";

export const fetchTodo = async (id: number) => {
    const response = await axios.get<FetchTodoResponse>(`/todo-list/show/${id}`);
    return response.data;
};

export const fetchTodos = async () => {
    const response = await axios.get<FetchTodosResponse>("/todo-list/list");
    return response.data;
};

export const doneTodo = async (params: DoneTodoRequestParams) => {
    const response = await axios.patch<DoneTodoResponse>(`/todo-list/change-done/${params.id}`, {
        done: params.done ? 1 : 0,
    });
    return response.data;
};

export const createTodo = async (params: CreateTodoRequestParams) => {
    const response = await axios.post<CreateTodoResponse>(`/todo-list/add`, params);
    return response.data;
};