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
        mode: 'dark'
    }
}
export const ThemeContext = createContext({themes: themes.light, toggleTheme: ()=>{}});


