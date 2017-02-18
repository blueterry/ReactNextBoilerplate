import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as langAction from '../actions/langActions';
import NotificationSystem from 'react-notification-system';
import {FormattedMessage} from 'react-intl';

import en from '../locale/en_US';
import cn from '../locale/zh_CN';

class Lang extends Component {
    constructor(props) {
        super(props);
        this.SetToChinese = this.SetToChinese.bind(this);
        this.SetToEnglish = this.SetToEnglish.bind(this);
        this._addNotification = this._addNotification.bind(this);        
    }
    _notificationSystem=null;
    
    _addNotification(message){
        
        this._notificationSystem.addNotification({
            message,
            level:'success',
            position: 'br'
        });
    }
    componentDidMount(){
        this._notificationSystem = this.refs.notificationSystem;        
    }
    
    render() {
        let {lang} = this.props;
        //console.log('Lang.lang:', lang);
        return (
            <ul className="nav navbar-nav">
                <li>
                    <NotificationSystem ref="notificationSystem" />
                </li>                                
                <li>
                    <a className="hand-cursor" onClick={this.SetToEnglish}>EN</a> 
                </li>
                <li>
                    <a className="hand-cursor" onClick={this.SetToChinese}>中</a>
                </li>
            </ul>
        );
    }

    SetToChinese (){
        console.log('set to chn');
        let {dispatch} = this.props;
        this._addNotification(cn.langChanged);
        return dispatch(langAction.changeToSimpChinese());
    }
    
    SetToEnglish(){
        console.log('set to eng');
        let {dispatch} = this.props;
        this._addNotification(en.langChanged);
        return dispatch(langAction.changeToEnglish());
    }
}

export default connect(state=>state)(Lang);