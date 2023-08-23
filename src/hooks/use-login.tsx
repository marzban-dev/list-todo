import { useMutation } from "@tanstack/react-query";
import { login } from "@/api/auth";

export const useLoginMutation = () => {
    return useMutation(login);
};
