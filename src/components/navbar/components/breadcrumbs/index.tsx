import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import IconHouse from "../../../svg-components/house";

const Breadcrumbs: React.FC = () => {
    const { pathname } = useLocation();

    const path = useMemo(() => {
        if (pathname === "/create") return "/ create";
        if (pathname.includes("/todo")) return "/ todo";
        return null;
    }, [pathname]);

    return (
        <h1 className="text-white font-semibold flex justify-start items-center gap-2 bg-secondary-500 h-[30px] min-[550px]:h-[40px] px-2 min-[550px]:px-3 rounded-[10px] max-[450px]:hidden">
            <Link to="/">
                <IconHouse className="fill-white h-[16px] min-[550px]:h-[20px]" />
            </Link>
            {path && <div className="text-[16px] min-[550px]:text-[20px]">{path}</div>}
        </h1>
    );
};

export default Breadcrumbs;
