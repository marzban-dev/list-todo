import Logo from "@/components/logo";
import { AppContext } from "@/context/app.context";
import { useContext } from "react";
import Breadcrumbs from "./components/breadcrumbs";
import UserInfo from "./components/user";
import Back from "./components/back";

const Navbar = () => {
    const { user } = useContext(AppContext);

    return (
        <nav className="fixed top-0 w-full h-[60px] min-[550px]:h-[70px] bg-secondary-400 shadow-md flex justify-between items-center px-4 min-[550px]:px-6 z-50">
            <div className="flex justify-start items-center gap-4">
                <div className="flex justify-start items-center gap-2 min-[550px]:gap-4">
                    <Back />
                    <Logo className="text-[24px] min-[550px]:text-[28px]" />
                </div>
                <Breadcrumbs />
            </div>
            <UserInfo name={user!.name} />
        </nav>
    );
};

export default Navbar;
