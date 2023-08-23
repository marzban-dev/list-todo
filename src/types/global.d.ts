export {};

declare global {
    type Todo = {
        id: number;
        todo: string;
        description: string;
        done: boolean;
        user_id: number;
        created_at: string;
        updated_at: string;
    };

    type User = {
        id: number;
        name: string;
        avatar: null;
        email: string;
        email_verified_at: null;
        created_at: string;
        updated_at: string;
    };

    type TodosFilters = "done" | "new" | "all";
}
