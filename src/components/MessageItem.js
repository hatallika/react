import React from 'react';
import {Button, Card, CardContent, Typography} from "@mui/material";
import {useDispatch} from "react-redux";

const MessageItem = ({id, author, message, deleteMessage}) => {



    return (

        <Card sx={{ minWidth: 275, mt: 1 }}>
            <CardContent >
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {author}:
                </Typography>
                <Typography variant="h5" component="div">
                   {message}
                </Typography>
                <Button onClick={() => deleteMessage(id)}>Delete</Button>
            </CardContent>
        </Card>


    );
};

export default MessageItem;