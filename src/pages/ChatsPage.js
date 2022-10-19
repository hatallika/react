import React from 'react';
import {Grid, Typography} from "@mui/material";
import ChatListContainer from "../components/ChatListContainer";
import Messages from "../components/Messages";


const ChatsPage = () => {

    return (
       <>
                <Grid container spacing={2}>

                    <Grid item xs={12} sm={4} md={4}  >
                        <Typography variant="h5" component="div" color="primary">Chat list</Typography>
                        <ChatListContainer/>
                    </Grid>

                    <Grid item xs={12} sm={8} md={8}>
                        <Messages/>
                    </Grid>

                </Grid>

        </>
    );
};

export default ChatsPage;