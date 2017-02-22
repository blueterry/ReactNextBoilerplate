
import expect from 'expect';
import index from '../../pages/index';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils'

describe('pages->index', ()=>{
    it('Should exist', ()=>{
        expect(index).toExist();
    })
    it('Should Loaded',()=>{
        var spy = expect.createSpy();
        var IndexPage = TestUtils.renderIntoDocument(<index dispatch={spy}/>)
        var $el = $(ReactDOM.findDOMNode(IndexPage));
        //console.log('index test :', $el);
    })
})