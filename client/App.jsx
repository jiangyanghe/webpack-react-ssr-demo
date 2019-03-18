import React from 'react'

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
      </div>
    )
  }
}
export default App;
