import React, {useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {registerInitiate} from "../../redux/reducers/authReducer/authReducer";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //const user = useSelector(state => state.auth.currentUser)

    const handleForm = async (e) => {
        e.preventDefault();
        if(password !== passwordConfirm) {
            return;
        }
        await dispatch(registerInitiate(email, password, name));
        navigate('/profile');
    }


    return (
        <div>
            <h2>Регистрация</h2>
            <Box component={'form'} onSubmit={handleForm}>
                <TextField
                    id="name-input"
                    name="name"
                    className="input"
                    label="name"
                    type="text"
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                />
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
                <TextField
                    id="confirm"
                    name="confirm"
                    className="input"
                    label="Conform password"
                    type="text"
                    value={passwordConfirm}
                    onChange={(e) => {setPasswordConfirm(e.target.value)}}
                />
                <Button type={'submit'}>Регистрация</Button>
            </Box>
            
        </div>
    );
};

export default RegisterPage;