import './App.scss';
import React, {useEffect, useState} from "react";
import Form from "./Form";

function App() {
    let [messageList, setMessageList] = useState([]);
    let [robot, setRobot] = useState("");

    //Вне ДЗ попробовала использовать useEffect для единоразового рендера списка из хранилища данных.
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

    //Задача 3 и 4. Робот отвечает на новое полученное сообщение автора.
    useEffect(()=>{
       setTimeout(()=>{
           botAnswer();
       }, 3000)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[messageList])


    //Задача 2: получим данные списка из формы
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
        <div>
            <div className="App-header"><h1>Lesson 2</h1></div>
            <div className="main">
                <Form updateCurrentPage = {getInputMessage} />
                {
                    messageList.map((message) => (
                            <div key ={message.id} className="messageItem">
                                <span className="span_message">{message.author}: </span>
                                <span className="message">{message.message}</span>
                            </div>
                        )
                    )
                }
                {robot && <div className="robot">{robot}</div>}
            </div>

        </div>

  );
}

export default App;
