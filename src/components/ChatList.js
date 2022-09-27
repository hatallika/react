import React, {useState} from 'react';
import {Avatar, Button, List, ListItem, ListItemAvatar, ListItemButton, ListItemText} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import {Link} from "react-router-dom";


const ChatList = () => {
    //const theme = useTheme();
    const [chatList,setChatList] = useState([
        { id: '1', name: 'Chat1'},
        { id: '2', name: 'Chat2'},
        { id: '3', name: 'Chat3'},
    ]);
    const url = (id) => ('/chats/' + id);
    const deleteChat = (e) => {
        const { id } = e.target;
        //let chat = chatList.filter(chat => chat.id !== id);
        setChatList(chat => chat.filter(chat => chat.id !== id));
        };

    return (
        <>
            <List sx={{margin: '10px 0 10px 0', width: '100%'}}>
                    {chatList.map((chatItem)=>(
                        <ListItem disablePadding key={chatItem.id}>
                            <Link to={url(chatItem.id)}>
                                <ListItemButton>
                                    <ListItemAvatar><Avatar><ChatIcon/></Avatar></ListItemAvatar>
                                    <ListItemText primary={chatItem.name}/>
                                </ListItemButton>
                            </Link>
                            <Button id={chatItem.id} onClick={deleteChat}>x</Button>

                        </ListItem>
                    ))}

            </List>
        </>
    );
};

export default ChatList;