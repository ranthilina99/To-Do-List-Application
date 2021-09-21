import './App.css';
import React, {useEffect} from "react";
import Footer from "./Components/footer/footer";
import Header from "./Components/Header/header";
import {setToken} from "./setToken";
import store from "./Store";
import {LoadUser} from "./Actions/Authentication";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Provider} from "react-redux";
import Login from "./Components/pages/login/login";
import User from "./Components/user";
import Admin from "./Components/admin";
import Profile from "./Components/pages/profile/profile";
import Forgot from "./Components/pages/forgot/forgot";
import Register from "./Components/pages/register/register";
import GetAllUsers from "./Components/pages/admin/getAllUser";
import Reset from "./Components/pages/reset/reset";
import ConfirmEmail from "./Actions/confirmEmail";
import About from "./Components/about";

if(localStorage.getItem('token')){
    setToken(localStorage.getItem('token'));
}

function App() {
    useEffect(() => {
        store.dispatch(LoadUser())
    },[]);
  return (
    <div>
        <Header/>
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route>
                        {/* Umesh Routes */}
                        <Route path="/" component={Login} exact/>
                        <Route path="/about" component={About} />
                        <Route path="/user" component={User} />
                        <Route path="/admin" component={Admin} />
                        <Route path="/login" component={Login} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/forgot" component={Forgot} />
                        <Route path="/register" component={Register} />
                        <Route path="/getAll" component={GetAllUsers} />
                        <Route path="/users/reset_password/:id" component={Reset}/>
                        <Route path="/users/activate/:auth_token" component={ConfirmEmail}/>
                    </Route>
                </Switch>
            </Router>
        </Provider>
        <Footer/>
    </div>
  );
}

export default App;
