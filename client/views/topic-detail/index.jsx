import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import { AppState } from '../../store/app-state'

@inject('appState') @observer
class TopicDetail extends React.Component {
  static propTypes = {
    appState: PropTypes.instanceOf(AppState).isRequired,
  }

  inputChange(e) {
    const { appState } = this.props;
    appState.changeName(e.target.value);
  }

  render() {
    const { appState } = this.props
    return (
      <div>
        <input type="text" onChange={e => this.inputChange(e)} />
        {appState.msg}
      </div>
    )
  }
}

export default TopicDetail
