import React, {useState} from 'react';
import {Avatar, Button, List, ListItem, ListItemAvatar, ListItemButton, ListItemText} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CustomLink from "./CustomLink";
import {useDispatch, useSelector} from "react-redux";

const ChatList = () => {
    //Массив чатов
    const chatList = useSelector(state => state.chats.chats);
    const dispatch = useDispatch();

    const [name, setName] = useState("");

    //Удаление из Store redux
    const deleteChat = (id) => {
        dispatch({type: 'deletechat', payload: id})
        };

    //Добавление в Store redux
    const addChat = () =>{
        const objChat = {
            id: Date.now(),
            name: name
        }
        dispatch({type: 'addchat', payload: objChat})
    };

    return (
        <>
            <List sx={{margin: '10px 0 10px 0', width: '100%'}}>
                    {chatList.map((chatItem)=>(
                        <ListItem disablePadding key={chatItem.id}>
                            <CustomLink to={`/chats/${chatItem.id}`}>
                                <ListItemButton>
                                    <ListItemAvatar><Avatar><ChatIcon/></Avatar></ListItemAvatar>
                                    <ListItemText primary={chatItem.name}/>
                                </ListItemButton>
                            </CustomLink>
                            <Button onClick={() => deleteChat(chatItem.id)}>x</Button>

                        </ListItem>
                    ))}
            </List>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text"/>
            <button onClick={addChat}>Добавить чат</button>
        </>
    );
};

export default ChatList;