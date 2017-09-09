import React from 'react';
import ViewProjects from './viewProjects.jsx';
import { Button, Header, Icon, Modal, Image } from 'semantic-ui-react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class SaveProjectModal extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <Modal open={true} >
          <Modal.Header style={{textAlign: 'center'}}>Success!</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' shape='rounded' src={this.props.projectImage}/>
            <Modal.Description>
              <Header>You've created a Flickstarter project. Crowdfunding for {this.props.projectTitle} starts now!</Header>
              <p>You can edit your project any time during crowdfunding by navigating to My Projects.</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Link to={'/viewprojects'} >
              <Button color='blue' basic>
                <Icon name='home' /> Home
              </Button>
            </Link>
            <Button color='blue' basic>
              <Icon name='edit' /> Edit Project
            </Button>
          </Modal.Actions>
        </Modal>
        <Route path='/viewprojects' component={ViewProjects} />
      </div>
    );
  }
}

export default SaveProjectModal;
