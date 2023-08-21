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
}
