import React from 'react'
import { Link } from 'react-router-dom'
import Routes from '../config/router'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  add() {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    })
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <p>this is a app</p>
        <button type="button" onClick={() => this.add()}>
          add
          {count}
        </button>
        <br />
        <Link to="/">首页</Link>
        <br />
        <Link to="/detail">详情</Link>
        <Routes />
      </div>
    )
  }
}
export default App;
