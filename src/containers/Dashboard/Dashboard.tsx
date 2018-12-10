import * as React from 'react';
import { Component } from 'react';

import { connect } from 'react-redux';

export interface DashboardProps {
  onFetchPosts?: any;
  posts: any[]
}

export interface DashboardState {

}

class Dashboard extends React.Component<DashboardProps, DashboardState> {


  componentDidMount() {
    this.props.onFetchPosts();
  }

  renderRow = (e: any) => {
    return (
      <div className="row" style={{ border: '1px solid green', margin: '20px' }}>
        <img src="https://pbs.twimg.com/profile_images/480386114423779328/WtKQm-AO_400x400.jpeg" width="200" height="200" />
        <p>{e.id}</p>
        <p>{e.title}</p>
        <p>{e.body}</p>
      </div>
    )
  }

  render() {
    const list = this.props.posts || [];
    return (
      <div>
        Dashboard
        {list.map(this.renderRow)}
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    posts: state.order.posts
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onFetchPosts: () => dispatch({ type: 'FETCH_POSTS' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);