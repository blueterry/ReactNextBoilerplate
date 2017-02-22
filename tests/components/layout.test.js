import expect from 'expect';
import React,{Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import layout from '../../components/layout';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils'

describe('components->layout', ()=>{
    it('Should exist', ()=>{
        expect(layout).toExist();
    })
    it('Should be layout input',()=>{
        var spy = expect.createSpy();
        var IndexPage = TestUtils.renderIntoDocument(<layout dispatch={spy}/>)
        var $el = $(ReactDOM.findDOMNode(IndexPage));
        //console.log('tests->inputEx test :', $el);
        //$el.val('test');
        //TestUtils.Simulate.change($el[0],"test");
        //expect(spy).toHaveBeenCalled();
        //expect($el.val()).toBe('test');
        expect($el).toBe("text");
    })
    
})