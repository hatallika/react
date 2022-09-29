import './App.css';
import React from "react";

import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ChatsPage from "./pages/ChatsPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import ChatItem from "./components/ChatItem";




function App() {

    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'/chats/'} element={<ChatsPage/>}>
                    <Route path={'/chats/:id'} element={<ChatItem />}/>
                </Route>
                <Route path={'/profile'} element={<ProfilePage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>

        </Routes>

  );
}

export default App;
