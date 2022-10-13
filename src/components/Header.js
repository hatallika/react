import React, {useContext} from 'react';
import {Box, Button, FormControlLabel, Switch, Typography} from "@mui/material";
import CustomLink from "./CustomLink";
import {ThemeContext} from "../context";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "@mui/material"
import {logoutInitiate} from "../redux/reducers/authReducer/authReducer";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const {themes, toggleTheme} = useContext(ThemeContext);
    const user = useSelector(state => state.auth.currentUser);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logoutInitiate());
        setTimeout(()=> {
            navigate('/login');
        }, 1000);
    }
    return (
        <header>
            <FormControlLabel control={<Switch onClick={toggleTheme} />} label="Dark Theme" />
            <Box className="App-header" style={{background: themes.header.background, color: themes.header.color}}><Typography variant="h1">Lesson 4</Typography></Box>
            <Box paddingX={5} display={"flex"} style={{background: themes.body.background}} justifyContent={"space-between"}>
                <Box >
                <CustomLink to={"/"}><Button >Home</Button></CustomLink>
                <CustomLink to={"/chats"}><Button>Chats</Button></CustomLink>
                <CustomLink to={"/profile"}><Button>Profile</Button></CustomLink>
                <CustomLink to={"/posts"}><Button>Posts</Button></CustomLink>
                </Box>
                <Box>
                    {(!user) && <CustomLink to={"/login"}><Button>Login</Button></CustomLink>}
                    {(user) && <>
                        Привет, {user.displayName} <Link href="#" onClick={handleLogout}>Выйти</Link>
                    </> }
                </Box>
            </Box>
        </header>
    );
};

export default Header;