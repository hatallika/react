import React from 'react';
import {Grid, Typography} from "@mui/material";
import ChatList from "../components/ChatList";
import ChatItem from "../components/ChatItem";
//import {useParams} from "react-router-dom";


const ChatsPage = () => {

    return (
       <>
                <Grid container spacing={2}>

                    <Grid item xs={4} md={2}>
                        <Typography variant="h5" component="div" color="primary">Chat list</Typography>
                        <ChatList/>
                    </Grid>

                    <Grid item xs={8} md={6}>
                        <ChatItem/>
                    </Grid>

                </Grid>

        </>
    );
};

export default ChatsPage;