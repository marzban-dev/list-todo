import Spinner from "@/components/spinner";
import IconArrowRightFromBracket from "@/components/svg-components/arrow-right-from-bracket";
import { useLogoutMutation } from "@/hooks/use-logout";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { UserInfoProps } from "./types";

const UserInfo: React.FC<UserInfoProps> = ({ name }) => {
    const navigate = useNavigate();
    const { mutateAsync: logout, isLoading } = useLogoutMutation();

    const onClick = async () => {
        await logout();

        const cookies = new Cookies(null, { path: "/" });
        cookies.remove("auth-token");
        cookies.remove("auth-user");

        navigate(0);
    };

    return (
        <div className="flex justify-end items-center gap-3">
            <span className="text-white max-[550px]:hidden">{name}</span>
            <div className="text-white bg-primary-100 w-[35px] h-[35px] rounded-full flex justify-center items-center">
                {name[0].toUpperCase()}
            </div>
            <button
                onClick={onClick}
                className="hover:fill-white fill-[rgb(180,180,180)] active:scale-[0.8] transition-transform"
            >
                {isLoading ? (
                    <Spinner />
                ) : (
                    <IconArrowRightFromBracket className="fill-inherit h-[20px] transition-colors" />
                )}
            </button>
        </div>
    );
};

export default UserInfo;
