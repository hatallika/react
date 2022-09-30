import React, {useContext} from 'react';
import {Link, useMatch} from "react-router-dom";
import {ThemeContext} from "../context";

const CustomLink = ({to, children}) => {
    const match = useMatch(to);
    const {themes} = useContext(ThemeContext)
    return (
        <Link to={to} style={{color: match ? 'red' : themes.body.text}}>
            {children}
        </Link>
    );
};

export default CustomLink;