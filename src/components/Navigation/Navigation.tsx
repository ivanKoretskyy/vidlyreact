import React from 'react';
import classes from './Navigation.module.css' 

export interface NavigationProps {
  toggleSideNav: any
}
 
const Navigation: React.SFC<NavigationProps> = (props: any) => {
  return ( 
    <nav className={classes.Navigation}>
      <div className={classes.Toggle} onClick={props.toggleSideNav}>Menu</div>
      <div className={classes.Title}>Lorem</div>
      <div className={classes.Login}>Log In</div>
      
    </nav>
   );
}
 
export default Navigation;