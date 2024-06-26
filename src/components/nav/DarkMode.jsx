import React, {useEffect, useState} from 'react';
import LightModeButton from "../../assets/website/light-mode-button.png"
import DarkModeButton from "../../assets/website/dark-mode-button.png"

function DarkMode() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    )

    const element = document.documentElement //html element

    useEffect(() => {
        if(theme === "dark"){
            element.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            element.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [theme, element]);

    return (
        <div className={"relative"}>
            <img
                src={LightModeButton}
                alt={""}
                className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            />
            <img
                src={DarkModeButton}
                alt={""}
                className={"w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"}
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            />
        </div>
    );
}

export default DarkMode;