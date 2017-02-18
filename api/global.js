import {FormattedMessage} from 'react-intl';
import zh_CN from '../locale/zh_CN';
import en_US from '../locale/en_US';

const serverUrl = 'http://www.rkete.com:9000/query/';
const uploadUrl = 'http://www.rkete.com:9000/uploads/';

export default {

    serverUrl,
    uploadUrl,   

    getLangs(lang){
        return lang === "zh"?zh_CN:en_US;
    },
    checkLogin(user) {
        //console.log('global->checkLogin:',user);
        if(user===undefined || user.userId === undefined || parseInt(user.userId) <= 0){
            //console.log('Jobs->not Logged in');
            return false;
        }
        return true;
    },
    showLoginButton(){
        return(
            <button onClick={()=>(location.assign('./#/loginform'))} className="btn btn-default">
                <FormattedMessage id="notLoginYet"/>
            </button>   
        );
    },

    fetchData(url, param, successFunc, failFunc){
        //var url = new URL(server + "jobman.asmx/GetCommentsByWsjId");
        fetch(url,{
            method: 'POST',
            headers: {
                "Content-type": "application/x-www-form-urlencoded",
                "Accept": "application/json"
            },
            body: param //"wsJobId=" + jobId
        }).then((response) =>{
            if(response.status >= 400){
                //fail to load comments
                if(typeof failFunc === 'function'){
                    failFunc(param)
                }
            }
            return response.json();
        }).then(json=>{
            //console.log('jobAPI->getComments->json:',json);
            //dispatch(JobCommentsLoaded(jobId, json.wsComments))
            if(typeof successFunc === 'function'){
                successFunc(json);
            }
        })        
    }
}