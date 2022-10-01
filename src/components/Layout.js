import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import {Box, createTheme, ThemeProvider} from "@mui/material";
import {ThemeContext, themes} from "../context";
import Header from "./Header";


const Layout = () => {
    const [theme,setTheme] = useState(themes.light);
    const [mode, setMode] = useState('light');

    const toggleTheme = () => {
        //Задание 3. Меняем тему из context (Заголовок)
        setTheme(prevState => prevState === themes.light ? themes.dark : themes.light );
        //поменяла остальные элементы темы через MUI
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const themeMui = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    return (
        <ThemeContext.Provider value={{themes: theme, toggleTheme: toggleTheme} } >
            <ThemeProvider theme={themeMui}>
                <Header/>
                <Box  style={{background: theme.body.background}}>

                    <Outlet/>

                    <footer>
                        @2022
                    </footer>
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default Layout;