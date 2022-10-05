import React, {useState} from 'react';
import {Box, Button, TextField} from "@mui/material";

function Form(props) {
    // const [author, setAuthor] = useState('');
    // const [message, setMessage] = useState('');
    const defaultValues = {
        author: '',
        message: ''
    }
    const [formValues, setFormValues] = useState(defaultValues);

    //отправка сообщения
    const sendValue = (e)=>{
        e.preventDefault();
        if(formValues.author !== '' && formValues.message !== ''){
            e.preventDefault();
            props.updateCurrentPage(formValues.author, formValues.message);
            setFormValues(defaultValues);
        }

    };
    //обновление состояния
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    return (
        <Box component="form" onSubmit={sendValue}
        autoComplete="off">
            <TextField
                // autoFocus
                id="author-input"
                name="author"
                className="input"
                label="Author"
                type="text"
                value={formValues.author}
                onChange={handleInputChange}
                inputRef={props.inputRef}
            />

            <TextField
                id="message-input"
                className="input"
                label ="Message"
                name="message"
                type="text"
                value={formValues.message}
                onChange={handleInputChange}
            />

            <Button sx={{margin: '12px 0 7px 0'}} variant="outlined" type="submit">Добавить сообщение</Button>

        </Box>
    );

}



export default Form;