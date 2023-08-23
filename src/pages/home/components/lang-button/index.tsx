import Button from "@/components/button";
import { useTranslation } from "react-i18next";

const LangButton = () => {
    const { i18n } = useTranslation();

    const changeLang = () => {
        if (i18n.language === "fa") i18n.changeLanguage("en");
        else i18n.changeLanguage("fa");
    };

    return (
        <Button
            onClick={changeLang}
            className="w-[45px] h-[45px] rounded-full bg-primary flex justify-center items-center active:scale-[0.9] transition-transform text-white"
        >
            {i18n.language === "fa" ? "en" : "فا"}
        </Button>
    );
};

export default LangButton;
