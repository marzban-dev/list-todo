import Button from "@/components/button";
import IconMoon from "@/components/svg-components/moon";
import IconSun from "@/components/svg-components/sun";
import { AppContext } from "@/context/app.context";
import { useContext } from "react";

const ThemeButton = () => {
    const { theme, toggleTheme } = useContext(AppContext);

    return (
        <Button
            onClick={toggleTheme}
            className="w-[45px] h-[45px] rounded-full bg-primary flex justify-center items-center active:scale-[0.9] transition-transform"
        >
            {theme === "dark" ? (
                <IconSun className="fill-white h-[20px] scale-[1.3]" />
            ) : (
                <IconMoon className="fill-white h-[20px] scale-[1.3]" />
            )}
        </Button>
    );
};

export default ThemeButton;
