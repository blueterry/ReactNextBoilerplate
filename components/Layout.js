import React,{Component} from 'react'
import {connect} from 'react-redux';
import Link from 'next/link';
import Head from 'next/head';
//import Document, { Head, Main, NextScript } from 'next/document'
//import styleSheet from 'styled-components/lib/models/StyleSheet'

import moment from 'moment';

//import reactjsAdminlte from 'adminlte-reactjs';

import zh_CN from '../locale/zh_CN';
import en_US from '../locale/en_US';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';

import {IntlProvider, addLocaleData, FormattedMessage} from 'react-intl';
import {getLang} from '../reducers/langReducer';

//import {reducer, initStore, initialState, loadInitData} from '../store/store';

import MenuMain from './MenuMain';

addLocaleData([...en_US, ...zh_CN]);

// export default class Layout extends Document {
//     static async getInitialProps({renderPage}){
//         const page = renderPage();
//         const style = styleSheet.rules().map(rule => rule.cssText).join('\n');
//         return{...page, style}
//     }

    // constructor(props) {
    //     super(props);
    //     this.store = initStore(reducer, props.isServer, props.initialState)
    // }

    //render() {
    //    var {children, mainMenus, title = "Rekete management system"} = this.props;
export default connect(state=>state)(({children, mainMenus, title="Rekete management system"}) =>{
        //var store = configStore();
        //console.log('Layout->state:', state);
        var theLang =getLang();
        //var HeaderBar = reactjsAdminlte.HeaderBar;
        //console.log('Layout->mainMenus:', mainMenus);
        return (           
            <IntlProvider locale={theLang} messages={theLang === "en" ? en_US : zh_CN}>
                <div className="hold-transition skin-blue sidebar-mini full-height">                
                    <Head>
                        <title>{title}</title>
                        <meta charSet='utf-8'/>
                        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport" />
                        <link rel="stylesheet" href="/static/bootstrap/css/bootstrap.min.css"/>
                        <link rel="stylesheet" href="/static/font-awesome470/css/font-awesome.min.css"/>
                        <link rel="stylesheet" href="/static/ionicons201/css/ionicons.min.css" />                
                        <link rel="stylesheet" href="/static/adminlte232/css/AdminLTE.css"/>
                        <link rel="stylesheet" href="/static/adminlte232/css/skins/_all-skins.css"/>
                    </Head>   
                    <div className="full-height">
                        <header className="main-header">
                            <a href="#" className="logo">
                                <span className="logo-mini"><b>R</b>KT</span>
                                <span className="logo-lg"><FormattedMessage id="appName"/></span>
                            </a>
                            <nav className="navbar navbar-static-top">
                                <a href="#" className="sidebar-toggle">
                                    <span className="sr-only">Toggle Navigation</span>
                                </a>
                                <div className="navbar-custom-menu">
                                    <ul className="nav navbar-nav">
                                        <li>
                                            <Link href='/'><a>Home</a></Link>
                                        </li>
                                        <li>
                                            <Link href='/About'><a>About</a></Link>
                                        </li>
                                        <li>
                                            <Link href='/Login'><a>Login</a></Link>   
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </header>
                        <div className="full-height">                            
                            <aside className="main-sidebar">
                                <section className="sidebar">
                                    <div className="user-panel"></div>
                                    <form action="#" className="sidebar-form" method="get">
                                        <div className="input-group">
                                            <input type="text" name="q" className="form-control" placeholder="Search..."/>
                                            <span className="input-group-btn">
                                                <button type="submit" name="search" className="btn btn-float" id="search-btn">
                                                    <i className="fa fa-search"></i>
                                                </button>                                            
                                            </span>
                                        </div>
                                    </form>
                                    <MenuMain mainMenus={mainMenus}/>
                                </section>
                            </aside>                        
                            <div className="full-height">
                                <div className="full-height wrapper">
                                    <div className="content-wrapper">
                                        {children}
                                    </div>
                                </div>
                                <footer className="main-footer no-margin-right">
                                <div className="pull-right hidden-xs">
                                    <b>Version</b> 1.0.0
                                </div>
                                <strong>Copyright &copy; 2007~{moment().year()}
                                    <a href="http://www.rkete.com">Rekete</a>
                                </strong>. All rights reserved.
                            </footer>  
                            </div>
                            
                        </div>
                    </div>                                                     
                </div>     
            </IntlProvider>   
        );
    }
)