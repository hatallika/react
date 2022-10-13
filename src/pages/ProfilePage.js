import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {logoutInitiate} from "../redux/reducers/authReducer/authReducer";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

const ProfilePage = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.currentUser);
    const navigate = useNavigate();

    const handleAuth = () => {

            dispatch(logoutInitiate());
            setTimeout(()=> {
                navigate('/login');
            }, 1000);
    }
    useEffect(()=>{
        if(!user){
            navigate('/login');
        }
    },[navigate, user])

    return (
        <div>
            <h2>Профиль</h2>
            {user && <>
                {user.displayName}
                <Button variant={"text"} onClick={handleAuth}>Выход</Button>
            </>}

        </div>
    );
};
export default ProfilePage;