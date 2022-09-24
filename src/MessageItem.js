import React from 'react';
import {Card, CardContent, Typography} from "@mui/material";

const MassageItem = ({id, author, message}) => {
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
            </CardContent>
        </Card>
        </>
    );
};

export default MassageItem;