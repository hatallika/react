import React from 'react';
import CustomLink from "./CustomLink";
import {Outlet} from "react-router-dom";
import {Box, createTheme, ThemeProvider, Typography} from "@mui/material";
import {blue} from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: blue[500],
        }
    }
})


const Layout = () => {
    return (
        <ThemeProvider theme={theme}>
            <header>
                <Box className="App-header"><Typography variant="h1">Lesson 4</Typography></Box>
                <CustomLink to={"/"}>Home</CustomLink>
                <CustomLink to={"/chats"}>Chats</CustomLink>
                <CustomLink to={"/profile"}>Profile</CustomLink>
            </header>
            <Box className="main">
            <main>
                <Outlet/>
            </main>
            <footer>
                @2022
            </footer>
            </Box>
        </ThemeProvider>
    );
};

export default Layout;