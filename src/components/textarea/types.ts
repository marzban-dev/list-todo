export type TextareaProps = {
    fullWidth?: boolean;
    error?: boolean;
    errorMessage?: string;
} & React.ComponentProps<"textarea">;
