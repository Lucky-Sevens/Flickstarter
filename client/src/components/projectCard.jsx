import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Icon, Image, Popup } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import ProjectStatus from './projectStatus.jsx';
import SupportModal from './supportModal.jsx';
import EditProject from './editProject.jsx';
import { Card, Grid, Icon, Image, Segment, Popup, Label, Button } from 'semantic-ui-react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


const ProjectCard = (props) => (
  <Card fluid raised>
    <div>
      <Popup 
        trigger={
          <Button circular 
            icon='thumbs outline up' 
            id='upvote-button'
          />
        }
        content='Upvote project'
        position='left center'
      />
      <Image fluid src={props.project.photo_url}/>
    </div>

    <Card.Content >
      <div className='card-genre-upvotes'>
        <div>
          {props.project.genre}
        </div>
        <div>
          <Icon name='thumbs up' /> {props.project.upvote_count}
        </div>
      </div>
      <Card.Header>
        {props.profilePage ?
          <div id='project-card-content-container'>
            {props.project.name}
            <Popup
              trigger={
                <Link to={`/editproject/${props.id}`}>
                  <Icon name='edit' circular inverted color='teal'/>
                </Link>
              }
              content='Edit your project'
              position='left center'
            />
          </div> : props.project.name
        }
      </Card.Header>

      <Card.Meta>
        <div style={{display: 'flex', justifyContent: 'left', color: 'black'}}>
        By {props.creatorName}
        </div>
      </Card.Meta>

      <Card.Description>
        {props.project.short_description}
      </Card.Description>

    </Card.Content>

    <Card.Content extra>

      <ProjectStatus
        name={props.project.name}
        contributed={props.project.raised_amount}
        funded={Math.round(100 * (props.project.raised_amount / props.project.goal_amount)).toString()}
        daysRemaining={props.daysRemaining(props.project)}
      />

      <SupportModal />

    </Card.Content>

  </Card>
);

export default ProjectCard;
