import React, { Component } from 'react';
import {Provider} from 'react-redux';

import {reducer, initStore, initialState, loadInitData} from '../store/store';
import Layout from '../components/Layout';

class AdminPage extends Component {
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

    render() {
        //console.log('About-fontawesome:',FontAwesome);
        var {children, title, subTitle, breadcrumb} = this.props;
        console.log('AdminPage->title, subTitle, breadcrumb:', title, subTitle, breadcrumb);
        return (
            <Provider store={this.store}>
                <Layout title={title} subTitle={subTitle} breadcrumb={breadcrumb}>
                    {children}
                </Layout>
            </Provider>
        );
    }
}

export default AdminPage;