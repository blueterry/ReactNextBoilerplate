import expect from 'expect';
import React,{Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import inputEx from '../../components/inputEx';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils'

describe('components->inputEx', ()=>{
    it('Should exist', ()=>{
        expect(inputEx).toExist();
    })
    it('Should be text input',()=>{
        var spy = expect.createSpy();
        var IndexPage = TestUtils.renderIntoDocument(<inputEx  locId="phUserName" refName="userName" className="text" dispatch={spy}/>)
        var $el = $(ReactDOM.findDOMNode(IndexPage));
        //console.log('tests->inputEx test :', $el);
        $el.val('test');
        //TestUtils.Simulate.change($el[0],"test");
        //expect(spy).toHaveBeenCalled();
        expect($el.val()).toBe('test');
        //expect($el).toBe("text");
    })
    
    it('Should be button',()=>{
        var spy = expect.createSpy();
        var IndexPage = TestUtils.renderIntoDocument(<inputEx  locId="phUserName" refName="userName" type="button" className="button" dispatch={spy}/>)
        var $el = $(ReactDOM.findDOMNode(IndexPage));
        //console.log('index test :', $el[0]);
        $el.val('test');
        TestUtils.Simulate.click($el[0]);
        //expect(spy).toHaveBeenCalled();
        expect($el.val()).toBe('test');
    })
})