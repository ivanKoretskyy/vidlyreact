import React from 'react';
import classes from './Layout.module.css'
import Navigation from '../components/Navigation/Navigation';
import Main from './Main/Main';
import { BrowserRouter } from 'react-router-dom';
import SideBar from './SideBar/SideBar';

export interface LayoutProps {
  
}
 
export interface LayoutState {
  showSideNav: boolean
}
 
class Layout extends React.Component<LayoutProps, LayoutState> {
  state = { showSideNav: false }
  showSideNavHandler() {
    this.setState(prevState => ({showSideNav: !prevState.showSideNav}))
  }
  render() {
    const sideClass = classes.SideNav + (this.state.showSideNav ? ' ' + classes.ShowSideNav: '')
    return (
      <BrowserRouter>
        <div className={classes.Container}>
      
          <header className={classes.Header}>
            <Navigation toggleSideNav={() => this.showSideNavHandler()} />
          </header>
          
          <section className={classes.Main}>
            <aside className={sideClass}>
              <SideBar />
            </aside>
          
              <section className={classes.MainContent}>
                <Main />
              </section>
          
          </section>
          <footer className={classes.Footer}>Footer</footer>
    
      </div>
    </BrowserRouter>
    );
  }
}
 
export default Layout;