import React,{Component} from 'react';
import {Provider} from 'react-redux';
import {reducer, initStore, initialState, loadInitData} from '../store/store';
import Layout from '../components/Layout';

export default class Index extends Component{
    static getInitialProps({req}){
        const isServer = !!req;
        const store = initStore(reducer, initialState, isServer);
        //console.log('Index->getInitialProps->store:', store);
        return {initialState: store.getState(), isServer}
    }

    constructor(props) {
        super(props);
        //console.log('Index->constructor->props.initialState:', props.initialState);
        this.store = initStore(reducer, props.initialState, props.isServer)
    }
    
    render(){
        return(
            <Provider store={this.store}>
                <Layout mainMenus={this.props.initialState.mainMenus}>
                    <div className="full-height">Hello Next.js</div>
                </Layout>
            </Provider>
        )
    }
}