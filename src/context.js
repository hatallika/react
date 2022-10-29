import {createContext} from "react";

export const themes ={
    light: {
        header: {
            background: "#3cb5ec",
            color: "#fff"
        },
        body: {
            background: "#eee",
            text: '#000'
        },

        menu: {
            active: "#3cb5ec",
        },
        mode:'light'
    },

    dark: {
        header: {
            background: "#000",
            color: "#fff"
        },
        body: {
            background: "#000",
            text: '#eee'
        },
        menu: {
            active: "#a9a0a0",
        },
        mode: 'dark'
    }
}
export const ThemeContext = createContext({themes: themes.light, toggleTheme: ()=>{}});


