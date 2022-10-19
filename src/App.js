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
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import ProtectedRoutes from "./components/ProtectedRoutes";
import AddContactPage from "./pages/Firebase/AddContactPage";

function App() {

    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'/chats/'} element={<ChatsPage/>}>
                    <Route path={'/chats/:id'} element={<Messages />}/>
                </Route>
                <Route path={'/profile'} element={<ProtectedRoutes>
                    <ProfilePage/>
                </ProtectedRoutes>
                    }/>
                <Route path={'/addcontact'} element={<ProtectedRoutes>
                    <AddContactPage/>
                </ProtectedRoutes>
                }/>
                <Route path={'/posts'} element={<PostsPage/>}/>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/registration'} element={<RegisterPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>

        </Routes>

  );
}

export default App;
