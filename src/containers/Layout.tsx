import React from 'react';
import classes from './Layout.module.css'
import Navigation from '../components/Navigation/Navigation';
import Main from './Main/Main';
import { BrowserRouter } from 'react-router-dom';
import SideBar from './SideBar/SideBar';
import Auth from '../Auth/Auth';

export interface LayoutProps {
  history?: any;
  
}
 
export interface LayoutState {
  showSideNav: boolean
}
 
class Layout extends React.Component<LayoutProps, LayoutState> {
  state = { showSideNav: false }
  auth: any;

  constructor(props: LayoutProps) {
    super(props);

    this.auth = new Auth(this.props.history);
  }

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
            <aside className={sideClass}>
              <SideBar />
            </aside>
          
              <section className={classes.MainContent}>
                <Main auth={this.auth} {...this.props}/>
              </section>
          
          </section>
          <footer className={classes.Footer}>Footer</footer>
    
      </div>
    );
  }
}
 
export default Layout;