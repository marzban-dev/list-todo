import { useLocation, useNavigate } from "react-router-dom";
import IconChevronLeft from "@/components/svg-components/chevron-left";
import classNames from "classnames";

const Back = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const classes = classNames({
        "w-[25px] min-[550px]:w-[35px] h-[25px] min-[550px]:h-[35px] flex justify-center items-center bg-secondary-500 rounded-full transition-transform active:scale-[0.8]": 1,
        hidden: pathname === "/",
    });

    return (
        <button onClick={() => navigate(-1)} className={classes}>
            <IconChevronLeft className="fill-white h-[16px] min-[550px]:h-[20px]" />
        </button>
    );
};

export default Back;
