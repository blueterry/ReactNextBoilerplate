import React,{Component} from 'react';

import {Provider} from 'react-redux';

import {reducer, initStore, initialState, loadInitData} from '../store/store';
import Layout from '../components/Layout';
import global from '../api/global';

export default class Index extends Component{   
    static getInitialProps({req}){
        const isServer = !!req;
        const store = initStore(reducer, initialState, isServer);
        loadInitData();
        return {initialState: store.getState(), isServer}
    }
    constructor(props) {
        super(props);
        this.store = initStore(reducer, props.initialState, props.isServer)
    }

    render(){        
        console.log('Index->props:',this.props)
        
        var theLang = global.getLangs(this.props.initialState.lang)
        return(
            <Provider store={this.store}>
                <Layout title={theLang.indexTitle} subTitle={theLang.indexSubTitle} breadcrumb={theLang.indexBreadcrumb}>
                    <div>Home Page</div>
                </Layout>      
            </Provider>
        )
    }
}