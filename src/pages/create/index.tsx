import Button from "@/components/button";
import Input from "@/components/input";
import Textarea from "@/components/textarea";
import { useCreateTodoMutation } from "@/hooks/use-create-todo";
import { Field, Form, Formik } from "formik";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { CreateTodoFormOnSubmit, CreateTodoFormValues } from "./types";

const LoginPage = () => {
    const { t, i18n } = useTranslation();
    const { mutateAsync: createTodo } = useCreateTodoMutation();

    const schema = Yup.object().shape({
        todo: Yup.string().required(t("create.todo-text-error")),
        description: Yup.string().required(t("create.todo-desc-error")),
    });

    const onSubmit: CreateTodoFormOnSubmit = async (values, { setSubmitting, resetForm }) => {
        await createTodo(values);
        resetForm();
        setSubmitting(false);
        toast.success(t("toast.create-todo-text"));
    };

    const initialValue: CreateTodoFormValues = {
        todo: "",
        description: "",
    };

    return (
        <Formik initialValues={initialValue} validationSchema={schema} onSubmit={onSubmit}>
            {({ isSubmitting, errors, isValid }) => (
                <div
                    className="w-full flex justify-center items-center"
                    style={{ direction: i18n.language === "fa" ? "rtl" : "ltr" }}
                >
                    <Form autoComplete="off" className="w-[400px] max-[500px]:px-4">
                        <h1 className="dark:text-white text-[30px] min-[350px]:text-[35px] min-[400px]:text-[40px] font-semibold w-full text-center">
                            {t("create.todo-title")}
                        </h1>
                        <Field
                            id="todo"
                            name="todo"
                            as={Input}
                            placeholder={t("create.todo-text")}
                            error={errors.todo}
                            errorMessage={errors.todo}
                            className="mt-10 min-[400px]:mt-14"
                            fullWidth
                        />
                        <Field
                            id="description"
                            name="description"
                            as={Textarea}
                            placeholder={t("create.todo-desc")}
                            error={errors.description}
                            errorMessage={errors.description}
                            className="mt-6"
                            rows={6}
                            fullWidth
                        />
                        <Button
                            type="submit"
                            className="mt-12"
                            loading={isSubmitting}
                            disabled={!isValid || isSubmitting}
                            fullWidth
                        >
                            {t("create.todo-button-text")}
                        </Button>
                    </Form>
                </div>
            )}
        </Formik>
    );
};

export default LoginPage;
