import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import { AppState } from '../../store/app-state'

@inject('appState') @observer
class TopicList extends React.Component {
  static propTypes = {
    appState: PropTypes.instanceOf(AppState).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { appState } = this.props;
    return (
      <div>{appState.msg}</div>
    )
  }
}

export default TopicList
