import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Container, Card, Grid, Icon, Image, Segment, Popup, Label } from 'semantic-ui-react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { getDaysRemaining } from '../helpers.js';
import $ from 'jquery';
import EditProject from './editProject.jsx';
import ProjectStatus from './projectStatus.jsx';
import Profile from './profile.jsx';
import Upvote from './upvote.jsx';

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upvotes: this.props.project.upvote_count
    }
    this.handleUpvote = this.handleUpvote.bind(this);
  }

  handleUpvote() {
    $.ajax({
      url: '/followsUpvotes/upvote',
      type: 'POST',
      data: {
        projectId: this.props.project.id
      },
      success: (data) => {
        let upvoteCount = this.state.upvotes;
        this.setState({
          upvotes: upvoteCount + 1
        });
      },
      error: (err) => {
        console.log(err.statusText, err);
      }
    });
  }

  render() {
    return (
      <Card fluid raised>
        <Upvote 
          project={this.props.project}
          handleUpvote={this.handleUpvote}
        />
        <Card.Content >
          <div className='card-genre-upvotes'>
            <div>
              {this.props.project.genre}
            </div>
            <div>
              <Icon name='thumbs up' /> {this.state.upvotes}
            </div>
          </div>

          <Card.Header>
            {this.props.pathName === '/profile' ?
              <div id='project-card-content-container'>
                <Link to={`/projects/${this.props.id}`}>
                  <p>{this.props.project.name}</p>
                </Link>
                <Popup
                  trigger={
                    <div className='card-title'>
                      <Link to={`/editproject/${this.props.id}`}>
                        <Icon name='edit' circular inverted color='teal'/>
                      </Link>
                    </div>
                  }
                  content='Edit your project'
                  position='left center'
                />
              </div> : 
              <div id='project-card-content-container'>
                <Link to={`/projects/${this.props.project.id}`}>
                  <p>{this.props.project.name}</p>
                </Link>
              </div>
            }
          </Card.Header>

          <Card.Description style={{margin: '0'}}>
            {this.props.project.short_description}
          </Card.Description>

          <Card.Meta>
            <div className='project-card-name-container'>
              {this.props.profilePage ?
                <div>
                  <div className='basic-flex-row'>
                    <Image src={this.props.photo} size="tiny" avatar />
                    By <p>{this.props.creatorName}</p>
                  </div>
                </div> :
                <div className='basic-flex-row'>
                  <Image src={this.props.project.profile.photo} size="tiny" avatar />
                  <div className='basic-flex-column' style={{margin: '0'}}>
                    By
                  </div>
                  <div className='basic-flex-column'>
                    <Link to={`/profile/${this.props.project.profile.id}`}>
                      <p>{this.props.project.profile.display}</p>
                    </Link>
                  </div>
                </div>
              }
            </div>
          </Card.Meta>

        </Card.Content>

        <Card.Content extra style={{paddingTop: '.5em'}}>

          <ProjectStatus
            name={this.props.project.name}
            contributed={this.props.project.raised_amount}
            funded={Math.round(100 * (this.props.project.raised_amount / this.props.project.goal_amount)).toString()}
            daysRemaining={getDaysRemaining(this.props.project)}
          />

        </Card.Content>

      </Card>
    );
  }
};

export default ProjectCard;
