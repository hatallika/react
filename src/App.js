import './App.css';
import React from "react";

import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ChatsPage from "./pages/ChatsPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import Messages from "./components/Messages";
import PostsPage from "./pages/PostsPage";




function App() {

    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'/chats/'} element={<ChatsPage/>}>
                    <Route path={'/chats/:id'} element={<Messages />}/>
                </Route>
                <Route path={'/profile'} element={<ProfilePage/>}/>
                <Route path={'/posts'} element={<PostsPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>

        </Routes>

  );
}

export default App;
