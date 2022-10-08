import React from 'react';
import {Grid, Typography} from "@mui/material";
import ChatListContainer from "../components/ChatListContainer";
import Messages from "../components/Messages";


const ChatsPage = () => {

    return (
       <>
                <Grid container spacing={2}>

                    <Grid item xs={4} md={2}>
                        <Typography variant="h5" component="div" color="primary">Chat list</Typography>
                        <ChatListContainer/>
                    </Grid>

                    <Grid item xs={8} md={6}>
                        <Messages/>
                    </Grid>

                </Grid>

        </>
    );
};

export default ChatsPage;