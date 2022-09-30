import React, {useEffect, useRef, useState} from 'react';
import {Box, Paper, Typography} from "@mui/material";
import Form from "./Form";
import MessageItem from "../MessageItem";
import {useParams} from "react-router-dom";

const Messages = () => {
    let {id} = useParams();
    id = (id) ?? 1; //генерируем параметры компонента по умолчанию, в роутере с :id не выходит использовать index.
    // Массив сообщений.
    let [messageList, setMessageList] = useState([
        {id: 1, author:"author1",message: "Hello!", chatId: 1},
        {id: 2, author:"author2",message: "Hello! My friends!", chatId: 1},
        {id: 3, author:"author3",message: "Hi! I am here!", chatId: 2},
        {id: 4, author:"author3",message: "Hi!", chatId: 3},
    ]);
    let [robot, setRobot] = useState("");
    const inputRef = useRef(null);
    const lastBDAuthor = messageList[messageList.length - 1].author;

    const messages = messageList.filter((message) => {
        if(!id) return true
        return  message.chatId === parseInt(id)
    });

    //Робот отвечает на новое полученное сообщение автора.
    useEffect(()=>{
        setTimeout(()=>{
            botAnswer();
        }, 3000);
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
    const getInputMessage = (author, message) => {

        setMessageList(prevState => [...prevState, {
            id: getLastId(prevState),
            author: author,
            message: message,
            chatId: parseInt(id)
        }]);
    };

    //Автоинкремент ID
    function getLastId(array){
        return array.length ? array[array.length -1].id + 1 : 0
    }

    function botAnswer(){
        const lastAuthor = messageList[messageList.length -1];

        if(lastAuthor && lastAuthor.author !== lastBDAuthor){
            setRobot('Сообщение автора '+ lastAuthor.author +' добавлено в чат' + id)
        }
    }
    return (
        <>
            <Paper style={{padding: 10}}>
                <Typography variant="h5" component="div" color="primary">Messages Chat id: {id}</Typography>
                <Form updateCurrentPage={getInputMessage} inputRef={inputRef}/>
            </Paper>

            <Box>{
                messages.map((message) => {
                    return <MessageItem
                                message={message.message}
                                author={message.author}
                                key={message.id}
                                chatId={message.chatId}
                            />
                })

                //Вариант рендера сообщений с условием по ID без функции
                // messageList.map((message) => {
                //     return message.chatId === parseInt(id) ?
                //         <MessageItem
                //             message={message.message}
                //             author={message.author}
                //             key={message.id}
                //             chatId={message.chatId}
                //         /> : ""
                //     }
                // )
            }
            </Box>

            {robot && <div className="robot">{robot}</div>}

        </>
    );
};

export default Messages;