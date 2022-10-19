import Posts from "./Posts";
import {Card, CardContent, Grid, Typography} from "@mui/material";
import React from "react";
import {render} from "@testing-library/react";

test('matches snapshot with no article', () => {
    const post = {};
    const view = render(
        <Posts post={post}/>
    );
    expect(view).toMatchSnapshot();
})