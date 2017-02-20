import React, { Component } from 'react';
import Layout from '../components/layout';
import {initStore} from '../store/store';
import withRedux from 'next-redux-wrapper';

class index extends Component {
    render() {
        return (
            <Layout>
                <div>
                    Hello Next.js world!
                </div>
            </Layout>
        );
    }
}

export default withRedux(initStore,(state)=>{
    console.log('index->state:',state);
    return state
})(index);