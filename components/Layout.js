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
//import {getLang} from '../reducers/langReducer';
import Lang from './lang';
import InputEx from './InputEx';

//import {reducer, initStore, initialState, loadInitData} from '../store/store';

import MenuMain from './MenuMain';

addLocaleData([...en, ...zh]);

export default connect(state=>state)(({children, mainMenus, title="Rekete Admin", subTitle="Version 0.1.2", breadcrumb="Page", lang, isClient}) =>{
        console.log('Layout->props->isClient:', isClient);
        
        if(!isClient){ //No need to keep loading it.
            return <div>Loading...</div>
        }
        
        let showBreadcrumb = ()=>{
            let bc = breadcrumb.split('>')
            return(
                <ol className="breadcrumb">
                    <li key={'bc-home'}><a href="/"><i className="fa fa-dashboard"></i> Home</a></li>                    
                    {bc.map((item)=>{
                        let sItems = (item.indexOf('|') > 0 ? item.split('|'): item)
                        return (
                            <li key={'bc-'+item}>
                               {Array.isArray(sItems)?<a href={'./'+sItems[1]}>{sItems[0]}</a>:item}
                            </li>)
                        }
                    )}
                </ol>
            )
        }
        return (           
            <IntlProvider locale={lang} messages={lang === "en" ? en_US : zh_CN}>
                <div className="hold-transition skin-blue sidebar-mini">                
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
                        <link rel="stylesheet" href="/static/css/main.css" />                        
                    </Head>
                    <header className="main-header">
                        <a href="#" className="logo">
                            <span className="logo-mini"><b>R</b>KT</span>
                            <span className="logo-lg">
                                {isClient&&<FormattedMessage id="appName"/>}
                            </span>
                        </a>
                        <nav className="navbar navbar-static-top">
                            <a href="#" className="sidebar-toggle">
                                <span className="sr-only"><FormattedMessage id="toggleNav" /></span>
                            </a>
                            <div className="navbar-custom-menu">
                                <ul className="nav navbar-nav">
                                    <li>
                                        <Link href='/'><a><FormattedMessage id="homeMenu" /></a></Link>
                                    </li>
                                    <li>
                                        <Link href='/about'><a><FormattedMessage id="aboutMenu" /></a></Link>
                                    </li>
                                    <li>
                                        <Link href='/login'><a><FormattedMessage id="loginButton" /></a></Link>   
                                    </li>   
                                    <li>
                                        <Lang/>
                                    </li>                                     
                                </ul>
                            </div>
                        </nav>
                    </header>           
                    
                    <aside className="main-sidebar">
                        <section className="sidebar">
                            <div className="user-panel"></div>
                            <form action="#" className="sidebar-form" method="get">
                                <div className="input-group"> 
                                    <InputEx locId="phSearch" refName="search" type="text" className="text"/>                     
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
                    <div className="wrapper">
                        <div className="content-wrapper">
                            <section className="content-header">
                                <h1>{title}<small>{subTitle}</small></h1>
                                {showBreadcrumb()}
                            </section>
                            <section className="content">
                            {children}
                            <div className="clearfix" />
                            </section>
                        </div>
                    </div>                    
                    <footer className="main-footer">                        
                        <strong>Copyright &copy; 2007~{moment().year()}
                            <a href="http://www.rkete.com">Rekete</a>
                        </strong>. All rights reserved.
                        <div className="pull-right hidden-xs">
                            <b>Version</b> 1.0.0
                        </div>
                    </footer>
                    <div className="clearfix"></div>                                              
                </div>                               
            </IntlProvider>   
        );
    }
)