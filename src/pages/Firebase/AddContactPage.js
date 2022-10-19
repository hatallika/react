import React, {useState} from 'react';
import {Box, TextField} from "@mui/material";
import {db} from "../../service/firebase";
import {useNavigate} from "react-router-dom";
const initialState = {
    name: "",
    email: "",
    contact: ""
};

const AddContactPage = () => {
const [state, setState] = useState(initialState);
const {name, email, contact} = state;
const navigate = useNavigate();

const handleChange = (e) => {
    const {name, value} = e.target;
    setState({...state, [name]: value});
};

const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !contact) {
        console.log('Введите пожалуйста данные контакта');
    } else {
        return new Promise(async (resolve) => {
            await db.child('contacts').push(state, (e) => {
                if (e) {
                    console.log(e)
                }
            });
            resolve(navigate('/'));
        });

    }
}

    return (
        <div>
            <h2>Add Contact</h2>
            <Box component={"form"} onSubmit={handleSubmit}>
                <TextField
                    // autoFocus
                    id="name"
                    name="name"
                    className="input"
                    label="Name"
                    type="text"
                    value={name}
                    onChange={handleChange}
                />
                <TextField
                    id="email"
                    name="email"
                    className="input"
                    label="Email"
                    type="text"
                    value={email}
                    onChange={handleChange}
                />
                <TextField
                    id="contact"
                    name="contact"
                    className="input"
                    label="Contact"
                    type="text"
                    value={contact}
                    onChange={handleChange}
                />
                <TextField
                    className="input"
                    label="Email"
                    type="submit"
                    value={'save'}
                />

            </Box>

        </div>
    );
};

export default AddContactPage;