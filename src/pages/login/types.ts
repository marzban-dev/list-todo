import { FormikHelpers } from "formik";

export interface LoginFormValues {
    email: string;
    password: string;
}

export type LoginFormOnSubmit = (
    values: LoginFormValues,
    formikHelpers: FormikHelpers<LoginFormValues>
) => void;
