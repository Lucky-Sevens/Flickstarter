import React from 'react';
import { Grid, Step, Form, Button } from 'semantic-ui-react';
import EditName from './components/editName.jsx';
import $ from 'jquery';
import PickRole from './components/pickrole.jsx';
import AddLocation from './components/addlocation.jsx';

class SetupProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      firstName: '',
      lastName: '',
      roles: [],
      chosenRole: [],
      location: '',
      description: '',
      linkedin: '',
      personalSite: '',
      youtube: '',
      photo: '',
      nameActive: true,
      roleActive: false,
      roleComplete: false,
      locationActive: false,
      locationComplete: false
    };
    this.handleNameSubmit = this.handleNameSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRoleSelect = this.handleRoleSelect.bind(this);
    this.saveRoles = this.saveRoles.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
  }

  componentDidMount () {
    $.get('/editprofile/getroles', data => {
      let options = [];
      data.map(role => {
        options.push({key: role.id, text: role.position, value: role.position});
      });
      this.setState({
        roles: options
      });
    });
  }

  handleNameSubmit() {
    $.post('/editprofile/updatename', 
      {username: this.state.username, 
        firstName: this.state.firstName, 
        lastName: this.state.lastName}, 
      (data) => {
        this.setState({
          nameActive: false,
          roleActive: true
        });
      });
  }

  handleRoleSelect(event, role) {
    event.preventDefault();
    this.setState({
      chosenRole: role.value
    });
  }

  saveRoles() {
    console.log('saved', this.state.chosenRole);
    $.post('/editprofile/saveuserroles', 
      {userrole: this.state.chosenRole}, 
      (data) => {
        this.setState({
          roleActive: false,
          roleComplete: true,
          locationActive: true
        });
      });
  }

  handleLocation() {
    $.post('/editprofile/updatelocation', 
      {location: this.state.location}, 
      (data) => {
        this.setState({
          locationActive: false,
          locationComplete: true
        });
      });
	}

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value;
    });
  }

  render() {
    return (
      <div>
        <Step.Group ordered vertical>

          <EditName 
            nameActive={this.state.nameActive}
            roleActive={this.state.roleActive}
            handleNameSubmit={this.handleNameSubmit}
            handleChange={this.handleChange}
          />

          <PickRole
            roleComplete={this.state.roleComplete}
            roleActive={this.state.roleActive}
            roles={this.state.roles}
            handleRoleSelect={this.handleRoleSelect}
            saveRoles={this.saveRoles}
            roleComplete={this.state.roleComplete}
          />

          <AddLocation
            locationActive={this.state.locationActive}
            handleLocation={this.handleLocation}
            handleChange={this.handleChange}
            locationComplete={this.state.locationComplete}
          />

          <Grid columns={2}>

            <Grid.Column>
              <Step>
                <Step.Content>
                  <Step.Title>Description</Step.Title>
        Tell us a little about yourself:
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