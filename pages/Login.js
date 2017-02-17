import React, { Component } from 'react';

import AdminPage from './AdminPage';
import LoginForm from '../components/LoginForm';
import LoginAPI from '../api/loginAPI';


class Login extends Component {
    
    render() {
        let {userInfo,dispatch} = this.props;

        //var userInfo = {userId:0}
        //console.log('Login.dispatch:', dispatch);
        console.log('login.the user:',userInfo, userInfo !== undefined);
        var loggedIn = (userInfo !== undefined && userInfo.userId > 0)
        let title = loggedIn ? "Hello " + userInfo.userName : "Verification"
        let subTitle = loggedIn ? "Welcome back" : "Please input user name and password"

        console.log('Login->loggedIn,title,subTitle:',loggedIn, title, subTitle)

        let renderLogin = ()=>{
            if(loggedIn){                
                return (<div><FormattedMessage id="currentUser"></FormattedMessage> : {userInfo.userName} </div>);
            }
            return (
                <LoginForm  />
            );
        };
        return (
            <AdminPage title={title} subTitle={subTitle} breadcrumb="Login">
                {renderLogin()}
            </AdminPage>            
        );
    }
}
export default Login;