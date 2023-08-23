import Button from "@/components/button";
import Input from "@/components/input";
import Logo from "@/components/logo";
import { AppContext } from "@/context/app.context";
import { useLoginMutation } from "@/hooks/use-login";
import { Field, Form, Formik } from "formik";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import * as Yup from "yup";
import { LoginFormOnSubmit, LoginFormValues } from "./types";
import { useTranslation } from "react-i18next";

const LoginPage = () => {
    const { t, i18n } = useTranslation();
    const { mutateAsync: login } = useLoginMutation();
    const { initTheme } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        initTheme();
    }, []);

    const schema = Yup.object().shape({
        email: Yup.string()
            .email(t("login.email-invalid-error"))
            .required(t("login.email-required-error")),
        password: Yup.string().required(t("login.password-error")),
    });

    const onSubmit: LoginFormOnSubmit = async (values, { setSubmitting, setStatus }) => {
        setStatus(null);

        try {
            const result = await login(values);

            const cookies = new Cookies(null, { path: "/" });
            cookies.set("auth-token", result.token);
            cookies.set("auth-user", result.user);

            navigate("/");
        } catch (e) {
            setStatus("Your credential is incorrect");

            setTimeout(() => {
                setStatus(null);
            }, 2500);
        }

        setSubmitting(false);
    };

    const initialValue: LoginFormValues = {
        email: "",
        password: "",
    };

    return (
        <Formik initialValues={initialValue} validationSchema={schema} onSubmit={onSubmit}>
            {({ isSubmitting, errors, isValid, status }) => (
                <div className="w-full flex justify-center items-center mt-[150px] max-[500px]:px-4">
                    <Form
                        autoComplete="off"
                        className="w-[400px]"
                        style={{ direction: i18n.language === "fa" ? "rtl" : "ltr" }}
                    >
                        <h1 className="dark:text-white text-[30px] min-[350px]:text-[35px] min-[400px]:text-[40px] font-semibold w-full text-center text-left">
                            {t("login.heading")}{" "}
                            <Logo className="inline-block text-[30px] min-[350px]:text-[35px] min-[400px]:text-[40px]" />
                        </h1>
                        <Field
                            id="email"
                            name="email"
                            as={Input}
                            placeholder={t("login.email-text")}
                            error={errors.email}
                            errorMessage={errors.email}
                            className="mt-14"
                            fullWidth
                        />
                        <Field
                            id="password"
                            name="password"
                            as={Input}
                            placeholder={t("login.password-text")}
                            error={errors.password}
                            errorMessage={errors.password}
                            className="mt-6"
                            fullWidth
                        />
                        {status && <p className="text-red-500 mt-4 px-4">{status}</p>}
                        <Button
                            type="submit"
                            className="mt-12"
                            loading={isSubmitting}
                            disabled={!isValid || isSubmitting}
                            fullWidth
                        >
                            {t("login.button-text")}
                        </Button>
                    </Form>
                </div>
            )}
        </Formik>
    );
};

export default LoginPage;
