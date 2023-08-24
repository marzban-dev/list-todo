import IconSpinnerThird from "@/components/svg-components/spinner-third";
import { SpinnerProps } from "./types";

const Spinner: React.FC<SpinnerProps> = ({ size = 20 }) => {
    return (
        <div className="animate-spin flex justify-center items-center [animation-duration:0.5s]">
            <IconSpinnerThird className="dark:fill-white fill-secondary-400" style={{ width: size }} />
        </div>
    );
};

export default Spinner;
