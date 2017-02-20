import React, { Component } from 'react';
import Layout from '../components/layout';
import {initStore} from '../store/store';
import withRedux from 'next-redux-wrapper';
import {FormattedMessage} from 'react-intl';

import LoginForm from '../components/loginForm'

class Login extends Component {
    render() {
        let {lang, userInfo} = this.props;

        console.log('login-> lang -> the user:',lang, userInfo, userInfo !== undefined);
        const hello = lang === "zh"? userInfo.userName + "您好": "Hello " + userInfo.userName
        const verify = lang === "zh"? "系统验证" : "Verification"
        const welcome = lang === "zh"? "验证通过，欢迎回来！": "Welcome back"
        const needVerify = lang === "zh"? "请输入用户名密码进行验证":"Please input user name and password" 

        let loggedIn = (userInfo !== undefined && userInfo.userId > 0)
        let title = loggedIn ? hello : verify
        let subTitle = loggedIn ? welcome: needVerify

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
            <Layout title={title} subTitle={subTitle} breadcrumb="Login">
                {renderLogin()}
            </Layout>            
        );
    }
}

export default withRedux(initStore,(state)=>{
    console.log('login->state:',state);
    return state
})(Login);