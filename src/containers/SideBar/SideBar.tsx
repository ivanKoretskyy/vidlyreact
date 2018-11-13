import * as React from 'react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './SideBar.module.css'

export interface SideBarProps {
  
}
 
export interface SideBarState {
  
}
 
class SideBar extends React.Component<SideBarProps, SideBarState> {
 // state = { :  }
  render() { 
    return (
      <div className={classes.SidebarContainer}>
        <ul className={classes.NavigationItems}>
          <li className={classes.NavigationItem}>
            <NavLink to='/dashboard' activeClassName={classes.active}>
              Dashboard
            </NavLink>
          </li>
          <li className={classes.NavigationItem}>                    
            <NavLink to='/contacts' activeClassName={classes.active}>
              Contacts
            </NavLink>
          </li>
        </ul>

      </div>
    );
  }
}
 
export default SideBar;