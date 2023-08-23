import { logout } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

export const useLogoutMutation = () => {
    return useMutation(logout);
};
