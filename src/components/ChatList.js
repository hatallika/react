import React from 'react';
import CustomLink from "./CustomLink";
import {Avatar, Button, ListItem, ListItemAvatar, ListItemButton, ListItemText} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

const ChatList = ({chatItem, deleteChat}) => {
    return (
        <ListItem disablePadding key={chatItem.id}>
            <CustomLink to={`/chats/${chatItem.id}`}>
                <ListItemButton>
                    <ListItemAvatar><Avatar><ChatIcon/></Avatar></ListItemAvatar>
                    <ListItemText primary={chatItem.name}/>
                </ListItemButton>
            </CustomLink>
            <Button onClick={() => deleteChat(chatItem.id)}>x</Button>
        </ListItem>
    );
};

export default ChatList;