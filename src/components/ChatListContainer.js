import React, {useState} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {chatsSelector} from "../redux/reducers/chatsReduser/chatsSelector";
import ChatList from "./ChatList";
import {ADD_CHAT, DELETE_CHAT} from "../redux/actionTypes";

const ChatListContainer = () => {
    //Массив чатов
    const chatList = useSelector(chatsSelector);
    const dispatch = useDispatch();

    const [name, setName] = useState("");

    //Удаление из Store redux
    const deleteChat = (id) => {
        dispatch({type: DELETE_CHAT, payload: id})
        };

    //Добавление в Store redux
    const addChat = () =>{
        const objChat = {
            id: Date.now(),
            name: name
        }
        dispatch({type: ADD_CHAT, payload: objChat})
    };

    return (
        <>
            <div className={"chat-list"}>
                    {chatList.map((chatItem)=>(
                        <ChatList chatItem={chatItem} deleteChat={deleteChat} key={chatItem.id}/>
                    ))}
            </div>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text"/>
            <button onClick={addChat}>Добавить чат</button>
        </>
    );
};

export default ChatListContainer;