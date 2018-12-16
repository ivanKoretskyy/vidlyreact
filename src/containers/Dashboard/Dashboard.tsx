import * as React from 'react';
import { Component } from 'react';
import { List, CellMeasurer, CellMeasurerCache, AutoSizer } from 'react-virtualized';

import { connect } from 'react-redux';

import s from './Dashboard.module.css';

export interface DashboardProps {
  onFetchPosts?: any;
  posts: any[]
}

export interface DashboardState {

}
const width= window.innerWidth - 1;
const height = 600;
const rowHeight = 256;

class Dashboard extends React.Component<DashboardProps, DashboardState> {
  cache: any

  constructor(props: any) {
    super(props);

    this.cache = new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 256
    })
  }


  componentDidMount() {
    this.props.onFetchPosts();
  }

  renderRow = (e: any) => {
    return (
      <div className="row" style={{ border: '1px solid green' }}>
        <img src="https://pbs.twimg.com/profile_images/480386114423779328/WtKQm-AO_400x400.jpeg" width="100" height="100" />
        <p>{e.id}</p>
        <p>{e.title}</p>
        <p>{e.body}</p>
      </div>
    )
  }

  // static height and widht
  rowRenderer = (props: any) => {
    return (
      <div className="row" key={props.key} style={props.style}>
        <img src="https://pbs.twimg.com/profile_images/480386114423779328/WtKQm-AO_400x400.jpeg" width="100" height="100" />
        <p>{this.props.posts[props.index].id}</p>
        <p>{this.props.posts[props.index].title}</p>
        <p>{this.props.posts[props.index].body}</p>
      </div>
    )
  }

  rowRendererCellMeasurer = (options: any) => {
    const size = (options.index < 40 || options.index > 70) ? 100 : options.index*2;
    return (
      <CellMeasurer
        key={options.key}
        cache={this.cache}
        parent={options.parent}
        columnIndex={0}
        rowIndex={options.index}>
        <div className="row" style={options.style}>
          <img src="https://pbs.twimg.com/profile_images/480386114423779328/WtKQm-AO_400x400.jpeg" width={size} height={size} />
          <p>{this.props.posts[options.index].id}</p>
          <p>{this.props.posts[options.index].title}</p>
          <p>{this.props.posts[options.index].body}</p>
        </div>
      </CellMeasurer>
    )
  }

  render() {
    const list = this.props.posts || [];
    
    return (
      <div className={s.Dashboard}>
        {/* {list.map(this.renderRow)} */}

        {/* <span>static list with static height and width</span>
        <List
          rowCount={list.length}
          width={width}
          height={height}
          rowHeight={rowHeight}
          rowRenderer={this.rowRenderer}
          overscanRowCount={3}
        /> */}

        {/* <span>Autosizer</span>
        <AutoSizer>{
          ({width, height}) => {
           return <List
              rowCount={list.length}
              width={width}
              height={height}
              rowHeight={rowHeight}
              rowRenderer={this.rowRenderer}
              overscanRowCount={3}/>
          }
        }
        </AutoSizer> */}

        <span>CellMeasurer</span>
        <AutoSizer>{
          ({width, height}) => (
           <List
              rowCount={list.length}
              width={width}
              height={height}
              deferredMeasurementCache={this.cache}
              rowHeight={this.cache.rowHeight}
              rowRenderer={this.rowRendererCellMeasurer}
              overscanRowCount={3}
            />
          )
        }
        </AutoSizer>

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