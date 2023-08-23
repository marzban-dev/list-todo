export type FetchTodosResponse = Todo[];

export type FetchTodoResponse = Todo;

export type CreateTodoRequestBody = {
    todo: string;
    description?: string;
};

export type DoneTodoRequestParams = { id: number; done: boolean };

export type DoneTodoResponse = {
    status: boolean;
    todo: Todo;
};

export type CreateTodoRequestParams = { todo: string; description: string };

export type CreateTodoResponse = Todo;
