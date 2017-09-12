import React from 'react';
import ReactDOM from 'react-dom';
import ProjectStatus from './projectStatus.jsx';
import EditProject from './editProject.jsx';
import { Card, Grid, Icon, Image, Segment, Popup, Label } from 'semantic-ui-react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


const ProjectCard = (props) => (
  <Card fluid raised>

    <Image src={props.project.photo_url}/>

    <Card.Content >

      <Card.Header>
        {props.profilePage ?
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '-3%'}}>
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
        <Image src={props.photo} avatar fluid/>By {props.creatorName}
      </Card.Meta>

      <Card.Description>
        {props.project.short_description}
      </Card.Description>

    </Card.Content>

    <Card.Content extra>

      <ProjectStatus 
        name={props.project.name} 
        contributed={props.project.raised_amount} 
        funded={(100 * (props.project.raised_amount / props.project.goal_amount)).toString().slice(0, 2)} 
        daysRemaining={props.daysRemaining(props.project)}
      />

      <a className="coinbase-button" data-code="2b30a03995ec62f15bdc54e8428caa87" href="https://www.coinbase.com/checkouts/2b30a03995ec62f15bdc54e8428caa87">Donate Bitcoin!</a>

    </Card.Content>

  </Card>
);

export default ProjectCard;
