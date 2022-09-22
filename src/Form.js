import React, {useState} from 'react';

function Form(props) {
    const [author, setAuthor] = useState('');
    const [message, setMessage] = useState('');

    const sendValue = (e)=>{
        e.preventDefault();
        props.updateCurrentPage(author, message);
    };

    return (
        <form onSubmit={sendValue}>
            <label htmlFor="author" className="label">Автор</label>
            <input id="author"  className="input" type="text" value={author} onChange={(e)=> setAuthor(e.target.value)}/>
            <label htmlFor="message" className="label">Сообщение</label>
            <input id="message"  className="input" type="text" value={message} onChange={(e) =>setMessage(e.target.value)}/>
            <button className="button" type='submit'>Добавить сообщение</button>
        </form>
    );

}



export default Form;