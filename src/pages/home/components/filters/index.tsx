import Badge from "@/components/badge";
import { FiltersProps } from "./types";
import { useTranslation } from "react-i18next";

const Filters: React.FC<FiltersProps> = ({ activeFilter, setActiveFilter }) => {
    const { t } = useTranslation();

    return (
        <div className="flex justify-center items-center gap-4 min-[400px]:gap-6 w-full">
            <Badge id="all" active={activeFilter === "all"} onChange={setActiveFilter}>
                {t("filters.all")}
            </Badge>
            <Badge id="done" active={activeFilter === "done"} onChange={setActiveFilter}>
                {t("filters.done")}
            </Badge>
            <Badge id="new" active={activeFilter === "new"} onChange={setActiveFilter}>
                {t("filters.new")}
            </Badge>
        </div>
    );
};

export default Filters;
