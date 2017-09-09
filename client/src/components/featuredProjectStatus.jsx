import React from 'react';
<<<<<<< HEAD
import {Statistic, Progress} from 'semantic-ui-react';
=======
import {Icon, Statistic, Progress} from 'semantic-ui-react';

const items = [
  { label: 'funded', value: '22%' },
  { label: 'contributed', value: '$2,543' },
  { label: 'backers', value: '49'},
  { label: 'days to go', value: '2'}
];
>>>>>>> Fixes Algolia bug

class FeaturedProjectStatus extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
<<<<<<< HEAD
      <div style={{width: '70%', height: '15%', display: 'flex', flexDirection: 'column', justifyContent: 'left', marginLeft: '15%'}}>
        <Progress size='medium' percent='88' indicating style={{marginBottom: '10px'}}/>
        <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingRight: '2%'}}>
          <Statistic.Group size='mini' style={{marginBottom: '-3%'}}>
            <Statistic>
              <Statistic.Value>88%</Statistic.Value>
              <Statistic.Label>funded</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>$840,301</Statistic.Value>
              <Statistic.Label>contributed</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>7,106</Statistic.Value>
              <Statistic.Label>backers</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>6</Statistic.Value>
              <Statistic.Label>days remaining</Statistic.Label>
            </Statistic>
          </Statistic.Group>  
          
=======
      <div style={{height: '30%', display: 'flex',flexDirection: 'column', justifyContent: 'left'}}>
        <Progress size='medium' percent='57' indicating/>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Icon name="map pin" size="large"/>
            Project location goes here
        </div>
        <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
          <Statistic.Group items={items} size='mini' widths='5'/>
>>>>>>> Fixes Algolia bug
        </div>
      </div>
    );
  }
}

export default FeaturedProjectStatus;
