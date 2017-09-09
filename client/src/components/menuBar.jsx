import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Menu, Search, Segment, Dropdown } from 'semantic-ui-react';
import CreateProject from './createProject.jsx';
import ViewProjects from './viewProjects.jsx';
import Profile from './profile.jsx';
import Messages from './messages.jsx';
import SearchBar from './searchBar.jsx';
import SetupProfile from '../SetupProfile.jsx';


class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: ''
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick (e, {name}) {
    this.setState({
      activeItem: name
    });
  }

  render() {
    const {activeItem} = this.state;
    return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', width: '94%', marginLeft: '3%'}}>
        <Menu pointing secondary fluid>
          <Link to={'/createproject'} style={{textDecoration: 'none'}}>
            <Menu.Item name='Create Project' active={activeItem === 'Create Project'} onClick={this.handleItemClick}/>
          </Link>
          <Link to={'/viewprojects'} style={{textDecoration: 'none'}}>
            <Menu.Item name='View Projects' active={activeItem === 'View Projects'} onClick={this.handleItemClick}/>
          </Link>
          <Menu.Menu position='right' />
          <Link to={'/messages'} style={{textDecoration: 'none'}}>
            <Menu.Item name='Messages' active={activeItem === 'Messages'} onClick={this.handleItemClick}/>
          </Link>
          <Menu.Item active={activeItem === 'Profile'}>
            <Dropdown pointing text='Profile'>
              <Dropdown.Menu>
                <Link to={'/profile'} style={{textDecoration: 'none'}} >
                  <Dropdown.Item name='Profile' onClick={this.handleItemClick}>View Profile</Dropdown.Item>
                </Link>
                <Link to={'/setupprofile'} style={{textDecoration: 'none'}} >
                  <Dropdown.Item name='Profile' onClick={this.handleItemClick}>Edit Profile</Dropdown.Item>
                </Link>
                <Link to={'/profile'} style={{textDecoration: 'none'}}>
                  <Dropdown.Item >Log Out</Dropdown.Item>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu>

        <Route path='/createproject' component={CreateProject} />
        <Route path='/viewprojects' component={ViewProjects} />
        <Route path='/messages' component={Messages} />
        <Route path='/setupprofile' component={SetupProfile} />
        <Route path='/profile' component={Profile} />
        <Route path='/setupprofile' component={SetupProfile} />
      </div>
    );
  }
}
export default MenuBar;
