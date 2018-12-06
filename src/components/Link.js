import React, { Component } from 'react';
import { timeDifferenceForDate } from '../utils';

class Link extends Component {
  render() {
    return (
      <div className="flex mt2 items-start">
        <div className="flex items-center">
          <span className="gray">{this.props.index + 1 }.</span>
          <div className="ml1 gray fl1">
            ▲
          </div>
        </div>
        <div className="ml1">
          <div>
            {this.props.link.description} ({this.props.link.url})
          </div>
          <div className="f6 lh-copy gray">
            0 votes | by Unknown{' '}
            {timeDifferenceForDate(this.props.link.createdAt)}
          </div>
        </div>
      </div>
    )
  }
}

export default Link