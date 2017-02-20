import React, { Component } from 'react';
import Layout from '../components/layout';
import {initStore} from '../store/store';
import withRedux from 'next-redux-wrapper';
//import reactjsAdminlte  from 'adminlte-reactjs';

import global from '../api/global';

class About extends Component {
    render() {
        const {lang, isClient} = this.props;
        const theLang =global.getLangs(lang);
        //const {InfoTile} = reactjsAdminlte;
        console.log('About-lang,isClient,theLang:', lang, isClient, theLang);
        var showClient =()=>{
            console.log('About-isClient:',isClient);
            if(isClient){
                const InfoTile = require('adminlte-reactjs').InfoTile;
                console.log('About-Client-InfoTile:', InfoTile);
                return <InfoTile width='3' 
                                        content='' 
                                        icon='fa-envelope-o' 
                                        stats='1410' 
                                        subject='Messages' 
                                        theme='bg-aqua'/>
            }
        }
        return (
            <Layout title={theLang.aboutTitle} subTitle={theLang.aboutSubTitle} breadcrumb={theLang.aboutBreadcrumb}>
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
                                    {showClient()}
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
            </Layout>
        );
    }
}

export default withRedux(initStore,(state)=>{    
    return state
})(About);
