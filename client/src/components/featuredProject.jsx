import React from 'react';
import ReactDOM from 'react-dom';
import {Image, Segment, Icon, Header, Label} from 'semantic-ui-react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import FeaturedProjectStatus from './featuredProjectStatus.jsx';
import SupportModal from './supportModal.jsx';

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
                  <div className='basic-flex-row'>
                    By 
                    <Link to={`/allprojects/${this.props.project.id}`} style={{paddingLeft: '4px'}}>
                      {this.props.featuredProjectCreatorDisplayName}
                    </Link>
                  </div>
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
                backers={this.props.featuredProjectBackers}
                daysRemaining={this.props.featuredProjectDaysRemaining}
                percentFunded={this.props.featuredProjectPercentFunded}
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
