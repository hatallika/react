import React from 'react';
import {Card, CardContent, Grid, Typography} from "@mui/material";

const Posts = ({post}) => {
    return (
        <Grid item xs={12} md={6}>
            <Card sx={{ display: 'flex' , m: 2}}>
                <CardContent sx={{ flex: 1 }}>
                    <Typography component="h2" variant="h5">
                        {post.title}
                    </Typography>

                    <Typography variant="subtitle1" paragraph>
                        {post.body}
                    </Typography>

                </CardContent>
            </Card>
        </Grid>
    );
};

export default Posts;