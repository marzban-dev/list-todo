export type BadgeProps = {
    id: TodosFilters;
    active: boolean;
    onChange: (id: TodosFilters) => void;
    children?: React.ReactNode;
};
