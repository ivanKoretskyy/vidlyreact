import classes from './Login.module.scss';
import * as React from 'react';

export interface LoginProps {
  
}
 
export interface LoginState {
  
}
 
class Login extends React.Component<LoginProps, LoginState> {
  //state = { :  }
  render() { 
    return (
      <div className={classes.Login}> Login</div>
    );
  }
}
 
export default Login;