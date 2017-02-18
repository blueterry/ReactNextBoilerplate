var isServer = typeof window === 'undefined'
console.log('About->isServer:',isServer);
import React, { Component } from 'react';

import reactjsAdminlte, {InfoTile}  from 'adminlte-reactjs';


import AdminPage from './AdminPage';
import global from '../api/global';

class About extends Component {
    render() {
        
        var lang = localStorage.getItem('lang');
        var theLang =global.getLangs(lang);
        console.log('About-lang:',theLang);

        return (
            <AdminPage title={theLang.aboutTitle} subTitle={theLang.aboutSubTitle} breadcrumb={theLang.aboutBreadcrumb}>
                <h3>Packages installed in this web app</h3>
                <ul>
                    <li>Next.js 1.2.3</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>React intl</li>
                    <li>isomorphic-fetch</li>                    
                    <li>adminlte-reactjs
                        <ul>                            
                            <li>
                                <div className="row">
                                    {!isServer&&<InfoTile width='3' 
                                        content='' 
                                        icon='fa-envelope-o' 
                                        stats='1410' 
                                        subject='Messages' 
                                        theme='bg-aqua'/>}
                                </div>
                            </li>
                        </ul>                        
                    </li>
                    <li>font-awesome
                        <ul>                            
                            <li>
                                <i className="fa fa-anchor"/>
                            </li>
                        </ul>                        
                    </li>
                    
                </ul>
            </AdminPage>            
        );
    }
}

export default About; //connect(state=>state)(About);