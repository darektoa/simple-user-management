import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Auth from '@/pages/Auth';
import Home from '@/pages/Home';
import Layout from '@/layouts';
import User from '@/pages/User';

function AppRoutes() {
    return (
        <Routes>
            <Route element={<Layout.Authentication />}>
                <Route
                    path="/sign-in"
                    element={<Auth.SignIn />}
                />

                <Route path="/sign-up">
                    <Route
                        index
                        element={<Auth.SignUp />}
                    />
                    <Route
                        path="success"
                        element={<Auth.SignUp.Success />}
                    />
                </Route>
            </Route>

            <Route element={<Layout.Sidebar />}>
                <Route
                    path="/"
                    element={<Home />}
                />

                <Route path="/users">
                    <Route
                        index
                        element={<User />}
                    />
                </Route>
            </Route>
        </Routes>
    );
}

export default AppRoutes;
