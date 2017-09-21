import React from 'react';
import $ from 'jquery';
import { Container, Segment, Statistic } from 'semantic-ui-react';
import {commafy} from '../helpers.js';

class OverallStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalContributions: '',
      totalBackers: '',
      totalProjects: ''
    };
  }

  componentDidMount () {
    $.get('/projects', data => {
      let contributions = [];
      let totalBackers;
      data.projects.map(project => {
        contributions.push(project.raised_amount);
      });

      $.get('/userProjectContributions/getProjectContributionsCount', count => {
        console.log('the count data', count);
        totalBackers = count;

        let totalContributions = contributions.reduce((a, b) => a + b);
        let totalProjects = data.projects.length;

        this.setState({
          totalDollars: '$' + commafy(totalContributions),
          totalProjects: data.projects.length,
          totalBackers: totalBackers
        });
      });
    });
  }

  render() {
    return (
      <div className='overall-stats-container'>
        <Segment inverted compact style={{paddingTop: '0', paddingBottom: '0', background: 'rgba(70, 70, 70, 0.65)'}}>
          <Statistic inverted color='red' value={this.state.totalDollars} label='total raised' style={{opacity: '1', margin: '.5rem'}} />
          <Statistic inverted color='green' value={this.state.totalBackers} label='backers' style={{opacity: '1'}}/>
          <Statistic inverted color='teal' value={this.state.totalProjects} label='projects' style={{opacity: '1'}}/>
        </Segment>
      </div>
    );
  }
}

export default OverallStats;
