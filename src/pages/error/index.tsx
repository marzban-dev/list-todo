import Button from "@/components/button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

type ErrorPageProps = {
    status: string;
    message: string;
};

const ErrorPage: React.FC<ErrorPageProps> = ({ status }) => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <main className="w-full h-screen flex justify-center items-center">
            <div className="flex justify-center items-center flex-col gap-8">
                <span className="text-red-500 text-[120px]">{status}</span>
                <p className="dark:text-white text-black text-[20px]">{t("page.error-text")}</p>
                <Button onClick={() => navigate("/")}>{t("page.error-button-text")}</Button>
            </div>
        </main>
    );
};

export default ErrorPage;
