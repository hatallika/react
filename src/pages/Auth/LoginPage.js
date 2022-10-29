import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Box, Button, TextField} from "@mui/material";
import {loginInitiate} from "../../redux/reducers/authReducer/authReducer";
import {loginError} from "../../redux/reducers/authReducer/actions";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleForm = (e) => {
        e.preventDefault();
        if(!email || !password){
            dispatch(loginError('Нет данных'));
            return;
        }
         dispatch(loginInitiate(email,password));
        setTimeout(()=>{
            navigate('/profile');
        },1000)

    }

    return (
        <div>
            <h2>Авторизация</h2>
            <Box component={'form'} onSubmit={handleForm}>
                <TextField
                    id="email-input"
                    name="email"
                    className="input"
                    label="email"
                    type="text"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                />
                <TextField
                    id="password-input"
                    name="email"
                    className="input"
                    label="password"
                    type="password"
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                />
                <Button type={"submit"}>Войти</Button>

            </Box>

            <Link to={'/registration'}>Регистрация</Link>
            
        </div>
    );
};

export default LoginPage;