import React from 'react';
import { Grid, Step, Form, Button } from 'semantic-ui-react';
import EditName from './components/editName.jsx';
import $ from 'jquery';
import PickRole from './components/pickrole.jsx';

class SetupProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      firstName: '',
      lastName: '',
      roles: [],
      chosenRole: '',
      experience: '',
      description: '',
      linkedin: '',
      personalSite: '',
      youtube: '',
      photo: '',
      nameComplete: true,
      roleComplete: false
    };
    this.handleNameSubmit = this.handleNameSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount () {
    $.get('/editprofile/getroles', data => {
      this.setState({
        roles: data
      });
    });
  }

  handleNameSubmit() {
    this.setState({
      nameComplete: false,
      roleComplete: true
    });
    $.post('/editprofile/updatename', 
      {username: this.state.username, 
        firstName: this.state.firstName, 
        lastName: this.state.lastName}, 
      (data) => {
        console.log(data);
      });
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <Step.Group ordered vertical>

          <EditName 
            nameComplete={this.state.nameComplete}
            roleComplete={this.state.roleComplete}
            handleNameSubmit={this.handleNameSubmit}
            handleChange={this.handleChange}
          />

          <PickRole
            roleComplete={this.state.roleComplete}
            roles={this.state.roles}
          />

          <Grid columns={2}>
            <Grid.Column>
              <Step>
                <Step.Content>
                  <Step.Title>Experience</Step.Title>
        What have you done?
                </Step.Content>
              </Step>
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
            <Grid.Column>
              <Step>
                <Step.Content>
                  <Step.Title>Description</Step.Title>
        Write a little about me:
                </Step.Content>
              </Step>
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
            <Grid.Column>
              <Step>
                <Step.Content>
                  <Step.Title>LinkedIn/Personal Website</Step.Title>
        Let's Connect!
                </Step.Content>
              </Step>
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
            <Grid.Column>
              <Step>
                <Step.Content>
                  <Step.Title>Youtube</Step.Title>
        Show off your past work
                </Step.Content>
              </Step>
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
            <Grid.Column>
              <Step>
                <Step.Content>
                  <Step.Title>Upload Photo</Step.Title>
          Now vogue
                </Step.Content>
              </Step>
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
          </Grid></Step.Group>
      </div>
    );
  }
}

export default SetupProfile;