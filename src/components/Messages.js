import React, {useEffect, useRef} from 'react';
import {Box, Paper, Typography} from "@mui/material";
import Form from "./Form";
import MessageItem from "./MessageItem";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {messagesSelector} from "../redux/reducers/messagesReducer/messagesSelector";
import {chatsSelector} from "../redux/reducers/chatsReduser/chatsSelector";
import {robotAnswerSelector} from "../redux/reducers/robotReducer/robotSelector";

const Messages = () => {

    const dispatch = useDispatch();

    const deleteMessage = (id) => {
        dispatch({type:'delmessage', payload: id})
    };

    const robotAnswer = useSelector(robotAnswerSelector);
    let {id} = useParams();
    id = (id) ?? 1; //генерируем параметры компонента по умолчанию, в роутере с :id не выходит использовать index.
    // Массив сообщений.
    let messageList = useSelector(messagesSelector);
    let chatList = useSelector(chatsSelector);

    //const dispatch = useDispatch();

    const chatName = () => {
        let currentChat = chatList.find(chat => chat.id === parseInt(id));
        if (currentChat) {
            return  currentChat.name;
        } else return 'undefined';
    }

    const inputRef = useRef(null);

    //фильтруем сообщения по id
    const messages = messageList.filter((message) => {
        if(!id) return true
        return  message.chatId === parseInt(id)
    });

    //Робот отвечает на новое полученное сообщение автора.
    useEffect(()=>{
        //Автофокус
        focusTextField(inputRef.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[messageList])

    function focusTextField(input){
        if(input){
            input.focus();
        }
    }

    //Добавляем сообщения из формы
    const sendInputMessage = (author, message) => {
        dispatch({
            type: 'addmessage',
            payload: {
                id: getLastId(messageList),
                author: author,
                message: message,
                chatId: parseInt(id),
            }
        });
    };

    //Автоинкремент ID
    function getLastId(array){
        return array.length ? array[array.length -1].id + 1 : 0
    }

    return (
        <>
            <Paper style={{padding: 10}}>
                <Typography variant="h5" component="div" color="primary">Messages Chat: {chatName()}</Typography>
                <Form updateCurrentPage={sendInputMessage} inputRef={inputRef}/>
            </Paper>

            <Box>{
                messages.map((message) => {
                    return <MessageItem
                                message={message.message}
                                author={message.author}
                                key={message.id}
                                chatId={message.chatId}
                                id={message.id}
                                deleteMessage={deleteMessage}
                            />
                })
            }
            </Box>

            {robotAnswer && <div className="robot">{robotAnswer}</div>}

        </>
    );
};

export default Messages;