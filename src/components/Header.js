import React, {useContext} from 'react';
import {Box, Button, FormControlLabel, Switch, Typography} from "@mui/material";
import CustomLink from "./CustomLink";
import {ThemeContext} from "../context";

const Header = () => {
    const {themes, toggleTheme} = useContext(ThemeContext);
    return (
        <header>
            <FormControlLabel control={<Switch onClick={toggleTheme} />} label="Dark Theme" />
            <Box className="App-header" style={{background: themes.header.background, color: themes.header.color}}><Typography variant="h1">Lesson 4</Typography></Box>
            <Box style={{background: themes.body.background}}>
                <CustomLink to={"/"}><Button >Home</Button></CustomLink>
                <CustomLink to={"/chats"}><Button>Chats</Button></CustomLink>
                <CustomLink to={"/profile"}><Button>Profile</Button></CustomLink>
                <CustomLink to={"/posts"}><Button>Posts</Button></CustomLink>
            </Box>
        </header>
    );
};

export default Header;