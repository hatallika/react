import './App.css';
import React, {useEffect, useRef, useState} from "react";
import Form from "./Form";
import ChatList from "./ChatList";
import {Box, Container, createTheme, Grid, Paper, ThemeProvider, Typography} from "@mui/material";
import {blue} from "@mui/material/colors";
import MessageItem from "./MessageItem";


const theme = createTheme({
    palette: {
        primary: {
            main: blue[500],
        }
    }
})

function App() {
    let [messageList, setMessageList] = useState([]);
    let [robot, setRobot] = useState("");
    const inputRef = useRef(null);

    // Ранее сохраненные сообщения.
    const bdMessage = [
        {id: 1, author:"author1",message: "Hello!"},
        {id: 2, author:"author2",message: "Hello! My friends!"},
        {id: 3, author:"author3",message: "Hi! I am here!"},
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
            message:message
        }])
    };

    //Автоинкремент ID
    function getLastId(array){
        return array.length ? array[array.length -1].id + 1 : 0
    }

    function botAnswer(){
        const lastAuthor = messageList[messageList.length -1];

        if(lastAuthor && lastAuthor.author !== lastBDAuthor){
           setRobot('Сообщение автора '+ lastAuthor.author +' добавлено')
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Box className="App-header"><Typography variant="h1">Lesson 3</Typography></Box>
            <Box className="main">
                <Grid container spacing={2}>

                    <Grid item xs={4} md={2}>
                            <Typography variant="h5" component="div" color="primary">Chat list</Typography>
                            <ChatList/>
                    </Grid>

                    <Grid item xs={8} md={6}>
                        <Paper style={{padding: 10}}>
                            <Typography variant="h5" component="div" color="primary">Messages</Typography>
                            <Form updateCurrentPage={getInputMessage} inputRef={inputRef}/>
                        </Paper>

                            {
                                messageList.map((message) => (
                                    <MessageItem
                                        message={message.message}
                                        author={message.author}
                                        key={message.id}/>
                                    )
                                )
                            }
                            {robot && <div className="robot">{robot}</div>}

                    </Grid>

                </Grid>
            </Box>

        </ThemeProvider>

  );
}

export default App;
