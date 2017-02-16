import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {FormattedMessage} from 'react-intl';

import Layout from '../components/Layout';
import LoginForm from '../components/LoginForm';
import LoginAPI from '../api/loginAPI';

import {reducer, initStore, initialState} from '../store/store';

export default class Login extends Component{
    static async getInitialProps({req}){
        const isServer = !!req;
        const store = initStore(reducer, isServer, initialState);      
        //store.dispatch(JSON.parse(localStorage.getItem('user')))
        console.log('Login->getInitialProps->isServer->store:', isServer, store);  
        
        return {initialState: store.getState(), isServer}
    }
    constructor (props){
        super(props);
        
        this.store = initStore(reducer, props.isServer, props.initialState);
        //this.store.dispatch(JSON.parse(localStorage.getItem('user')));
    }

    render() {
        var {userInfo,dispatch} = this.props;

        //var userInfo = {userId:0}
        console.log('Login.dispatch:', dispatch);
        console.log('components-login.the user:',userInfo, userInfo !== undefined);
        var renderLogin = ()=>{
            if(userInfo !== undefined && userInfo.userId > 0){
                return (<div><FormattedMessage id="currentUser"></FormattedMessage> : {userInfo.userName} </div>);
            }
            return (
                <LoginForm  />
            );

        };
        //console.log('renderLogin:', renderLogin)
        return (
            <Provider store={this.store}>
                <Layout>
                    {renderLogin()}
                </Layout>
            </Provider>
        );
    }    

}
