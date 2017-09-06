import React, { Component } from 'react';
import { Menu, Search, Segment } from 'semantic-ui-react';

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home'
    };
  }

  handleItemClick (e, {name}) {
    this.setState({
      activeItem: name
    });
  }

  render() {
    const { activeItem } = this.state;

    return (
        <div>
          <Menu pointing secondary>
            <Menu.Item name='Create Project' active={activeItem === 'Create Project'} onClick={this.handleItemClick} />
            <Menu.Item name='View Projects' active={activeItem === 'View Projects'} onClick={this.handleItemClick} />
            <Menu.Menu position='right'>
              <Menu.Item name='Profile' active={activeItem === 'Profile'} onClick={this.handleItemClick} />
              <Menu.Item name='Messages' active={activeItem === 'Messages'} onClick={this.handleItemClick} />
              <Menu.Item name='Logout' active={activeItem === 'Logout'} onClick={this.handleItemClick} />
            </Menu.Menu>
          </Menu>

          <Segment>

          </Segment>
        </div>
    );
  }
}

export default MenuBar;