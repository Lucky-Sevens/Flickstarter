import React from 'react';
import { Grid, Step, Dropdown, Button } from 'semantic-ui-react';


const PickRole = (props) => {
  let options = [];
  props.roles.map(role => {
    options.push({key: role.id, text: role.position, value: role.position});
  });
  return (
    <Grid columns={2}>
      <Grid.Column>
        <Step active={props.roleComplete}>
          <Step.Content>
            <Step.Title>Role</Step.Title>
        What do you do?
          </Step.Content>
        </Step>
      </Grid.Column>
      <Grid.Column>
        <Dropdown placeholder='Select Roles' fluid multiple selection options={options} />
      </Grid.Column>
    </Grid>
  );
};

export default PickRole;