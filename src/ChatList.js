import React, {useState} from 'react';
import {Avatar, List, ListItem, ListItemAvatar, ListItemButton, ListItemText} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";


const ChatList = () => {
    //const theme = useTheme();
    const [chatList] = useState([
        { id: '1', name: 'Chat1'},
        { id: '2', name: 'Chat2'},
        { id: '3', name: 'Chat3'},
    ]);
    return (
        <>
            <List sx={{margin: '10px 0 10px 0', width: '100%'}}>
                    {chatList.map((chatItem)=>(
                        <ListItem disablePadding key={chatItem.id}>
                            <ListItemButton>
                                <ListItemAvatar><Avatar><ChatIcon/></Avatar></ListItemAvatar>
                                <ListItemText primary={chatItem.name}/>
                            </ListItemButton>


                        </ListItem>
                    ))}

            </List>
        </>
    );
};

export default ChatList;