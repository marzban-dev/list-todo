import { Link } from "react-router-dom";
import IconPlus from "@/components/svg-components/plus";

const CreateButton = () => {
    return (
        <Link
            to="/create"
            className="w-[55px] h-[55px] rounded-full bg-primary flex justify-center items-center active:scale-[0.9] transition-transform"
        >
            <IconPlus className="fill-white h-[20px]" />
        </Link>
    );
};

export default CreateButton;
