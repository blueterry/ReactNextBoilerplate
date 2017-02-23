import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';

import {activeMenuChanged, activeSubMenuChanged} from '../actions/menuActions';

class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.onMiClick = this.onMiClick.bind(this);
        this.onSubMiClick = this.onSubMiClick.bind(this);        
    }
    render() {
        var {activeFlag, miIcon, miName, url, subItems} = this.props.menuData
        var mainClass = "";
        if(activeFlag)
            mainClass = " active "
        if(subItems !== undefined && subItems.length > 0){
            mainClass += " treeview "
            
        }
        //debug
        //console.log('subItems:',subItems);
        //end debug
        //var theUrl = url.length > 0? "href="+url:"";
        var renderSubItems = (mi)=>{            
            //console.log('post-subItems:', subItems);
            if(subItems !== undefined && subItems.length > 0){
                const subMenuItems = subItems.map((si)=>
                                <li key={si.name} className={si.activeFlag?"active":""}>
                                    <a onClick={(e)=>this.onSubMiClick(e, mi, si.name, si.url)}>
                                        <i className="fa fa-circle-o"></i>
                                        <FormattedMessage id={si.name} />
                                    </a>
                                </li>
                            );
                //console.log('subMenuItems:', subMenuItems);

                if(subItems!== undefined && subItems.length > 0){
                    return (
                        <ul className="treeview-menu">
                            {subMenuItems}
                        </ul>
                    );
                }
            }            
        }
        return (
            <li className={mainClass}>
                <a onClick={(e)=>this.onMiClick(e,miName, url)}>
                    <i className={"fa " + miIcon}></i>
                    <span><FormattedMessage id={miName} /></span>
                    <span className="pull-right-container">
                        <i className={activeFlag?"fa fa-angle-down pull-right":"fa fa-angle-left pull-right"}></i>
                    </span>
                </a>
                {renderSubItems(miName)}
            </li>                
        );
    }
    onMiClick(e, mi, url){        
        e.preventDefault();
        let {dispatch} = this.props;
        console.log('mItemname:', mi);
        dispatch(activeMenuChanged(mi));
        if(url.length > 0)
            location.assign('#/'+url);
    }
    onSubMiClick(e, mi, smi, url){
        e.preventDefault();
        let {dispatch} = this.props;
        console.log('smItemName:',e, mi, smi);
        dispatch(activeSubMenuChanged(mi, smi));
        if(url.length > 0)
            location.assign('#/'+url);
    }
}

export default connect(state=>state)(MenuItem);