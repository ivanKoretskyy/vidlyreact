import classes from './Login.module.scss';
import * as React from 'react';
import { connect } from 'react-redux';

export interface LoginProps {
  counter?: number;
  onIncrement?: any;
}
 
export interface LoginState {
}
 
class Login extends React.Component<LoginProps, LoginState> {
  //state = { :  }
  render() { 
    console.log(this.props);
    return (
      <div className={classes.Login}>
        <button onClick={() => this.props.onIncrement()}>Plus</button>
        <button>Minus</button>
        counter value {this.props.counter}
        
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    counter: state.order.counter
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    onIncrement: () => dispatch({type:'INCREMENT'})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);