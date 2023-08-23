export type LoginRequestParams = {
    email: string;
    password: string;
};

export type LoginResponse = {
    token: string;
    user: User;
};
