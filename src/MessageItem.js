import React from 'react';
import {Button, Card, CardContent, Typography} from "@mui/material";
import {useDispatch} from "react-redux";

const MassageItem = ({id, author, message}) => {

    const dispatch = useDispatch();

    const deleteMessage = (id) => {
        console.log('delete' + id)
        dispatch({type:'delmessage', payload: id})
    };

    return (
        <>
        <Card sx={{ minWidth: 275, mt: 1 }}>
            <CardContent >
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {author}:
                </Typography>
                <Typography variant="h5" component="div">
                   {message}
                </Typography>
                <Button onClick={() => deleteMessage(id)}>x</Button>
            </CardContent>
        </Card>

        </>
    );
};

export default MassageItem;