import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            filters: {
                new: "New",
                done: "Done",
                all: "All",
            },
            create: {
                "todo-title": "Create New Todo",
                "todo-text": "Todo Text",
                "todo-desc": "Description",
                "todo-text-error": "Text is required",
                "todo-desc-error": "Description is required",
                "todo-button-text": "Create Todo",
            },
            login: {
                "email-text": "Email",
                "password-text": "Password",
                "button-text": "Submit",
                heading: "Login to",
                "email-required-error": "Email is required",
                "email-invalid-error": "Email is not valid",
                "password-error": "Password is required",
            },
            todo: {
                "updated-date-text": "Last updated",
                "updated-today-text": "Today",
                "updated-past-text": "days ago",
            },
            toast: {
                "create-todo-text": "Todo created",
            },
            "empty-state-text": "There is nothing here",
            "page-error-text": "Page not found",
            page: {
                "error-text": "Page not found",
                "error-button-text": "Go to home",
            },
        },
    },
    fa: {
        translation: {
            filters: {
                new: "جدید",
                done: "تکمیل شده",
                all: "همه",
            },
            create: {
                "todo-title": "ساخت تودو جدید",
                "todo-text": "متن تودو",
                "todo-desc": "توضیحات",
                "todo-text-error": "متن تودو الزامی میباشد",
                "todo-desc-error": "توضیحات الزامی میباشد",
                "todo-button-text": "ساخت تودو",
            },
            login: {
                "email-text": "ایمیل",
                "password-text": "رمز عبور",
                "button-text": "تایید",
                heading: "ورود به",
                "email-required-error": "ایمیل الزامی است",
                "email-invalid-error": "ایمیل صحیح نیست",
                "password-error": "رمز عبور الزامی است",
            },
            todo: {
                "updated-date-text": "آخرین تغییر",
                "updated-today-text": "امروز",
                "updated-past-text": "روز گذشته",
            },
            toast: {
                "create-todo-text": "تودو ساخته شد",
            },
            "empty-state-text": "چیزی اینجا وجود ندارد",
            page: {
                "error-text": "صفحه پیدا نشد",
                "error-button-text": "برو به خانه",
            },
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    fallbackLng: "fa",
    debug: true,
});

export default i18n;
