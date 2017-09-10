import React from 'react';
import {Input, Header} from 'semantic-ui-react';

const ProjectBlurb = (props) => (
  <div style={{width: '98%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'left', backgroundColor:'#F8F9FD', marginBottom: '15px', paddingTop: '15px', marginLeft: '1%'}}>
    <div style={{width: '24%', height: '100%', textAlign: 'left', paddingLeft: '15px'}}>
      <Header as='h4'>Short blurb</Header>
    </div>
    <div style={{width: '76%', textAlign: 'left', marginBottom: '15px', paddingRight: '15px'}}>
      <Input name="projectBlurb" fluid
        onChange={props.handleBlurbInput}
        placeholder='Add your blurb here...'
      />
      <p> Give people a sense of what you’re doing. Skip “Help me” and focus on what you’re making. </p>
    </div>
  </div>
);

export default ProjectBlurb;
