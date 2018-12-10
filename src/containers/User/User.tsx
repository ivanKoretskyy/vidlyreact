import * as React from 'react';
import { Component } from 'react';

import Select from 'react-select';
type OptionType = { label: string, value: string } | null | undefined;
type OptionsType<U> = U[] | undefined;
type ValueType<T> = T | OptionsType<T> | null | undefined;

import classes from './User.module.scss';

export interface UserProps {

}

export interface UserState {
  role: OptionType
}

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

class User extends React.Component<UserProps, UserState> {

  // handleChange = (selected: ValueType<OptionType>) => {
  //   debugger;
  //   this.setState({ role: selected as OptionType })
  // }

  handleChange = (selected: ValueType<OptionType>) => {
    this.setState({ role: selected as OptionType })
  }
  handleChange2 = (option: ValueType<OptionType>) => {
    console.log(option)
  }

  onSubmitFrom(event: any) {
    event.preventDefault();
    console.log('submit form');
  }
  state = { role: null }
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.onSubmitFrom(event)}>
          <input type="text" placeholder="User Name" />
          <button type="submit">Submit</button>
        </form>
        <Select
          options={options}
          // onChange={(selected: ValueType<OptionType>) => this.handleChange(selected)}
          onChange={this.handleChange2}
          value={this.state.role}
        />
      </div>
    );
  }
}

export default User;