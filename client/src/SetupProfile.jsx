import React from 'react';
import { Grid, Step, Form, Button } from 'semantic-ui-react';

class SetupProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      firstName: '',
      lastName: '',
      role: '',
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

  handleNameSubmit(event) {
    event.preventDefault();
    console.log('submited', event.target.value);
    this.setState({
      nameComplete: false,
      roleComplete: true
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
      
        <Step.Group ordered vertical><Grid columns={2}>

          <Grid.Column>
            <Step active={this.state.nameComplete} completed={this.state.roleComplete}>
              <Step.Content>
                <Step.Title>Name</Step.Title>
        What's your name?
              </Step.Content>
            </Step>
          </Grid.Column>
          <Grid.Column>
            <Form onSubmit={this.handleNameSubmit}>
              <Form.Field>
                <label>Username</label>
                <input name='username' onChange={this.handleChange} placeholder='Username' />
              </Form.Field>
              <Form.Field>
                <label>First Name</label>
                <input name='firstName' onChange={this.handleChange} placeholder='First Name' />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input name='lastName' onChange={this.handleChange} placeholder='Last Name' />
                <Button >Next</Button>
              </Form.Field>
            </Form>
          </Grid.Column>
          <Grid.Column>
            <Step active={this.state.roleComplete}>
              <Step.Content>
                <Step.Title>Role</Step.Title>
        What do you do?
              </Step.Content>
            </Step>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
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