import React, {useState} from 'react';
import {Avatar, Button, List, ListItem, ListItemAvatar, ListItemButton, ListItemText} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CustomLink from "./CustomLink";
import {useDispatch, useSelector} from "react-redux";
import {chatsSelector} from "../redux/reducers/chatsReduser/chatsSelector";
import ChatList from "./ChatList";

const ChatListContainer = () => {
    //Массив чатов
    const chatList = useSelector(chatsSelector);
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
                        <ChatList chatItem={chatItem} deleteChat={deleteChat} key={chatItem.id}/>
                    ))}
            </List>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text"/>
            <button onClick={addChat}>Добавить чат</button>
        </>
    );
};

export default ChatListContainer;