import {login, loginSuccess, loginFail,logOut} from '../actions/loginActions';
//import Link from 'next/prefetch';
import 'isomorphic-fetch';

export default {
    logOut(){
        var locUser = JSON.parse(localStorage.getItem('user'));
        var theUser = logOut();
        locUser = {
            ...theUser.user,                         
        }
        
        localStorage.setItem('user', JSON.stringify(theUser));
        //console.log('localStorage:', localStorage.getItem('user'));
        return theUser;
    },

    setLocalUser(user){
        //console.log('setLocalUser->user:',user)
        localStorage.setItem('user', JSON.stringify(user));
    },

    getLocalUser(){
        //console.log('loginAPI->getLocalUser:', localStorage.getItem('user'));
        return JSON.parse(localStorage.getItem('user'));
    },
    verifyUser(userName, password){
        
        var url = new URL('http://www.rkete.com:9000/query/UserMan.asmx/VerifyUser');        
        // const res = await fetch(url,{
        //     method:'POST',
        //     headers:{
        //         "Content-type": "application/x-www-form-urlencoded",
        //         "Accept": "application/json"
        //     },
        //     body: "userName=" + userName + "&password=" + password + "&deviceId=react"

        // });
        // const json = await res.json()
        
        return dispatch =>{
            console.log('dispatching....');
            dispatch(login(userName,password));
            //fetchMock.get('*', {userId: 1});
            var res = fetch(url,{
                method: 'POST',
                headers:{
                    "Content-type": "application/x-www-form-urlencoded",
                    "Accept": "application/json"
                },
                body:"userName=" + userName + "&password=" + password + "&deviceId=react"
            })
            .then((abc)=>abc.json())
            .then(json=>{
                var userId = parseInt(json);
                console.log('3. json-json-userId:', json, userId);
                var user ={
                    userId: -1,
                    userName: ''
                }
                if(userId > 0){
                     user = {
                        userId: userId,
                        userName: userName
                    }                    
                }
                console.log('loginAPI.verifyUser.savingLocUser', user);
                localStorage.setItem('user', JSON.stringify(user)); //
                console.log('localStorage user: ', localStorage.getItem('user'));
                dispatch(userId> 0?loginSuccess(userId, userName): loginFail(userName));
            });
            //fetchMock.restore();
            return res;
        }
    }
}