import React, { Component } from 'react';
import reactjsAdminlte, {InfoTile}  from 'adminlte-reactjs';
import {Provider} from 'react-redux';
import {reducer, initStore, initialState, loadInitData} from '../store/store';

import Layout from '../components/Layout';

class About extends Component {
    static getInitialProps({req}){
        const isServer = !!req;
        const store = initStore(reducer, isServer, initialState);
        loadInitData();
        return {initialState: store.getState(), isServer}
    }

    constructor(props) {
        super(props);
        this.store = initStore(reducer, props.initialState, props.isServer)
    }

    render() {
        //console.log('About-fontawesome:',FontAwesome);
        return (
            <Provider store={this.store}>
            <Layout>
                <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>React intl</li>
                    <li>isomorphic-fetch</li>                    
                    <li>adminlte-reactjs
                        <ul>                            
                            <li>
                                <div className="row">
                                    <InfoTile width='3' 
                                        content='' 
                                        icon='fa-envelope-o' 
                                        stats='1410' 
                                        subject='Messages' 
                                        theme='bg-aqua'/>
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
            </Provider>
        );
    }
}

export default About;