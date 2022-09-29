import React, {useEffect, useRef, useState} from 'react';
import {Paper, Typography} from "@mui/material";
import Form from "./Form";
import MessageItem from "../MessageItem";
import {useParams} from "react-router-dom";

const ChatItem = () => {
    let {id} = useParams();
    id = (id) ?? 1; //генерируем параметры компонента по умолчанию, в роутере с :id не выходит использовать index.
    let [messageList, setMessageList] = useState([]);
    let [robot, setRobot] = useState("");
    const inputRef = useRef(null);

    // Ранее сохраненные сообщения.
    const bdMessage = [
        {id: 1, author:"author1",message: "Hello!", chatId: 1},
        {id: 2, author:"author2",message: "Hello! My friends!", chatId: 1},
        {id: 3, author:"author3",message: "Hi! I am here!", chatId: 2},
        {id: 4, author:"author3",message: "Hi!", chatId: 3},
    ];
    const lastBDAuthor = bdMessage[bdMessage.length - 1].author;

    useEffect(() => {
        setMessageList(bdMessage);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] );

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

    //Получим данные списка из формы
    const getInputMessage = (author, message) => {

        setMessageList(prevState => [...prevState, {
            id: getLastId(prevState),
            author: author,
            message:message,
            chatId: parseInt(id)
        }]);

        console.log(messageList);
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

            {
                messageList.map((message) => {
                    return message.chatId === parseInt(id) ?
                        <MessageItem
                            message={message.message}
                            author={message.author}
                            key={message.id}
                            chatId={message.chatId}
                        /> : ""
                    }
                )
            }
            {robot && <div className="robot">{robot}</div>}
        </>
    );
};

export default ChatItem;