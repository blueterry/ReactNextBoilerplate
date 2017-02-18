import React,{Component} from 'react';

import {Provider} from 'react-redux';

import {reducer, initStore, initialState, loadInitData} from '../store/store';
import Layout from '../components/Layout';

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
        //console.log('Index->props:',this.props)
        
        return(
            <Provider store={this.store}>
                <Layout title="Rekete Admin" subTitle="Version 0.1.5" breadcrumb="">
                    <div>Home Page</div>
                </Layout>      
            </Provider>
        )
    }
}