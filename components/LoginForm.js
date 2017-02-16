import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';

import loginAPI from '../api/loginAPI';
import InputEx from '../components/InputEx';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.onLogin = this.onLogin.bind(this);
        this.onLogout = this.onLogout.bind(this);       
    }
    
    render() {
        var {userInfo} = this.props;
        //console.log('loginForm.userInfo:', userInfo);

        var renderMessage = ()=>{
            
            var {userNameEx, passwordEx}  = this.refs;
            
            if(userInfo === undefined || passwordEx === undefined){
                return(<FormattedMessage id="loginPrompt" />);
            }else if(passwordEx !== undefined){
                var {password} = passwordEx.refs.wrappedInstance.refs;
                password.value='';
            }
            
            if(userNameEx !== undefined){
                var {userName} = userNameEx.refs.wrappedInstance.refs;
                
                userName.select();
            }
            return(<FormattedMessage id="loginFailPrompt" />);            
        }
        
        var renderForm = ()=>{
            if(userInfo !== undefined && userInfo.userId > 0){ //Already logged in
                return(
                    <div>  
                        <h1 className="title"><FormattedMessage id='loginSuccessTitle' values={{userName : userInfo.userName}}/></h1>
                        <button className="button expanded" onClick={this.onLogout}><FormattedMessage id="logoutButton"/></button> 
                    </div>
                )
            }

            //console.log('fail login:', userInfo);
            
            return(
                <div >  
                    <h1 className="title"><FormattedMessage id='loginTitle'/></h1>                        
                    <form onSubmit={this.onLogin}>            
                        <InputEx locId="phUserName" ref="userNameEx" refName="userName" type="text" className="text"/>                     
                        <InputEx locId="phPassword" ref="passwordEx" refName="password" type="password" className="password"/>
                        <InputEx type="submit" className="button expanded" locId="loginButton" />
                    </form>
                    {renderMessage()}
                </div>
            );        
        }
        return (            
            <div>
                {renderForm()}
            </div>
        );
    }
    onLogin(e){
        e.preventDefault();
        //console.log('login.props:',this.props);
        //console.log("the state:", this.refs.wrappedInstance);
        var {dispatch}  = this.props;
        var {userNameEx,passwordEx}  = this.refs;
        //console.log('userNameEx, passwordEx:', userNameEx, passwordEx);
        //console.log('InputEx.refs:', userNameEx.value);
        var {userName} = userNameEx.refs.wrappedInstance.refs;
        var {password} = passwordEx.refs.wrappedInstance.refs;
        
        //console.log('userName:', userName.value)
        //console.log('password:', password.value);
        if(userName.value.length > 0 && password.value.length > 0){
            //console.log('try login')
            dispatch(loginAPI.verifyUser(userName.value, password.value))
        }else{
            //console.log('login failed');
            userName.focus();
            password.value = "";
        }
    }
    onLogout(e){
        e.preventDefault();
        //console.log('logout');
        var {dispatch}  = this.props;
        dispatch(loginAPI.logOut());        
    }
}

export default connect(state=>state)(LoginForm);
