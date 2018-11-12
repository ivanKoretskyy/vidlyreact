import React from 'react';
import classes from './Main.module.css'
import Navigation from '../components/Navigation/Navigation';

export interface MainProps {
  
}
 
export interface MainState {
  showSideNav: boolean
}
 
class Main extends React.Component<MainProps, MainState> {
  state = { showSideNav: false }
  showSideNavHandler() {
    this.setState(prevState => ({showSideNav: !prevState.showSideNav}))
  }
  render() {
    const sideClass = classes.SideNav + (this.state.showSideNav ? ' ' + classes.ShowSideNav: '')
    return (
      <div className={classes.Container}>
      <header className={classes.Header}>
        <Navigation toggleSideNav={() => this.showSideNavHandler()} />
      </header>
      
      <section className={classes.Main}>
        <aside className={sideClass}>SideNav</aside>
        <section className={classes.MainContent}>
        Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
        </section>
      </section>
      <footer>Footer</footer>
    </div>
    );
  }
}
 
export default Main;