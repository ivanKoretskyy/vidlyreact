import React from 'react';
import classes from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';

export interface NavigationProps {
  toggleSideNav: any
}
 
const Navigation: React.SFC<NavigationProps> = (props: any) => {
  return ( 
    <nav className={classes.Navigation}>
      <div className={classes.Toggle} onClick={props.toggleSideNav}>Menu</div>
      <div className={classes.Title}>Lorem</div>
      <div className={classes.Login}>
        <NavLink to='/login'>Log In</NavLink>
      </div>
      
    </nav>
   );
}
 
export default Navigation;