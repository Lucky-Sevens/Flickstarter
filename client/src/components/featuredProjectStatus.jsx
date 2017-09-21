import React from 'react';
import {Statistic, Progress} from 'semantic-ui-react';

class FeaturedProjectStatus extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='project-status-container'>
        <Progress id='featured-project-status-bar' size='small' percent='88' indicating />
        <div id='featured-project-statistics-container'>
          <div className='featured-project-stat'>
            <h5>{this.props.percentFunded}</h5>
            <p>funded</p>
          </div>
          <div className='featured-project-stat'>
            <h5>${this.props.contributed}</h5>
            <p>contributed</p>
          </div>
          <div className='featured-project-stat'>
            <h5>{this.props.backers}</h5>
            <p>backers</p>
          </div>
          <div>
            <h5>{this.props.daysRemaining}</h5>
            <p>days remaining</p>
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturedProjectStatus;
