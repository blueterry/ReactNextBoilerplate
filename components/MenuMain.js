import React, {Component} from 'react';

import MenuItem from './MenuItem';

export default class MenuMain extends Component {        
    
    render() {        
        var {mainMenus} = this.props;
        
        //console.log('MenuMain->props, mainMenus:', this.props, mainMenus)

        var menuMap = ()=>{
            return mainMenus.map((mi)=>{
                return (
                    <MenuItem key={mi.miName} menuData={mi}></MenuItem>
                );
            })
        }
        return (
            <ul className="sidebar-menu ">
                <li className="header">MAIN Navigation</li>
                {menuMap()}
            </ul>            
        );
    }
}