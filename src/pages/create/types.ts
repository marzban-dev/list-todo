import { FormikHelpers } from "formik";

export interface CreateTodoFormValues {
    todo: string;
    description: string;
}

export type CreateTodoFormOnSubmit = (
    values: CreateTodoFormValues,
    formikHelpers: FormikHelpers<CreateTodoFormValues>
) => void;
