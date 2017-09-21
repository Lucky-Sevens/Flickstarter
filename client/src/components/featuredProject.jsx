import React from 'react';
import ReactDOM from 'react-dom';
import {Image, Segment, Icon, Header, Label} from 'semantic-ui-react';
import FeaturedProjectStatus from './featuredProjectStatus.jsx';
import SupportModal from './supportModal.jsx';
import { getDaysRemaining } from '../helpers.js';

class FeaturedProject extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Segment raised id='featured-project-segment'>
        <Label
          ribbon size='large'
          id='featured-project-label'
        >Featured</Label>
        <div className='basic-flex-centered-row'>
          <div className='basic-flex-column featured-project-container'>
            <div id='featured-project-image-container'>
            <Link to={`/allprojects/${this.props.project.id}`}>
              <Image fluid
                shape='rounded'
                src={this.props.project.photo_url}
              />
            </Link>
            </div>
          </div>
          <div className='basic-flex-column featured-project-container'>
            <div id='featured-project-content-container'>
              <Header as='h2'>{this.props.project.name}
                <Header.Subheader>
                  <Link to={`/allprojects/${this.props.project.id}`}>
                    By {this.props.project.profile.display}
                  </Link>
                </Header.Subheader>
              </Header>
              <p>{this.props.project.short_description}</p>
              <div id='featured-project-extras-container'>
                <div className='basic-flex-row'>
                  <div style={{paddingRight: '20px'}}>
                    <Icon name="marker" />
                    {this.props.project.location}
                  </div>
                  <div>
                    <Icon name="tag" />
                    {this.props.project.genre}
                  </div>
                </div>
              </div>
              <FeaturedProjectStatus 
                contributed={this.props.project.raised_amount}
                backers={this.props.project.contributions.length}
                daysRemaining={getDaysRemaining(this.props.project)}
                percentFunded={Math.round(100 * (this.props.project.raised_amount / this.props.project.goal_amount)).toString()}
              />
            </div>
            <div id='featured-project-contribute-button-container'>
            </div>
          </div>
        </div>
      </Segment>
    );
  }
}

export default FeaturedProject;
