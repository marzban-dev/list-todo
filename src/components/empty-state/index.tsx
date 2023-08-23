import IconFolderOpen from "@/components/svg-components/folder-open";
import classNames from "classnames";
import { EmptyStateProps } from "./types";

const EmptyState: React.FC<EmptyStateProps> = ({ text, className }) => {
    return (
        <div
            className={classNames(
                "w-full h-full flex justify-center items-center flex-col gap-4",
                className
            )}
        >
            <IconFolderOpen className="dark:fill-secondary-400 fill-secondary-900 h-[150px] min-[550px]:h-[200px]" />
            <p className="dark:text-white text-black text-[20px]">{text}</p>
        </div>
    );
};

export default EmptyState;
