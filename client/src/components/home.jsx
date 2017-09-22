import React from 'react';

import $ from 'jquery';
import { Grid, Segment, Header, Dropdown, Label } from 'semantic-ui-react';
import SearchInput, { createFilter } from 'react-search-input';
import FeaturedProject from './featuredProject.jsx';
import ProjectPreview from './projectPreview.jsx';
import Footer from './footer.jsx';
import Welcome from './welcome.jsx';
import OverallStats from './overallStats.jsx';
import { getDaysRemaining } from '../helpers.js';

const KEYS_TO_FILTERS = ['name', 'short_description', 'long_description', 'location'];
const colors = ['yellow', 'red', 'blue', 'green', 'black', 'pink', 'grey', 'purple', 'teal', 'orange', 'brown'];


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      searchTerm: '',
      filterTerm: null,
      userUpvotes: [],
      featuredProject: {},
      featuredProjectCreatorDisplayName: '',
      featuredProjectPercentFunded: '',
      featuredProjectBackers: 0,
      featuredProjectDaysRemaining: 0,
      featuredProjectProfileId: 0
      // totalDollars: '',
      // totalBackers: '',
      // totalProjects: ''
    };

  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/projects',
      success: (projectData) => {
        console.log(projectData.projects);
        this.setState({
          projects: projectData.projects,
          userUpvotes: projectData.userUpvotes,
          featuredProject: projectData.projects[0],
          featuredProjectCreatorDisplayName: projectData.projects[0].profile.display,
          featuredProjectPercentFunded: Math.round(100 * (projectData.projects[0].raised_amount / projectData.projects[0].goal_amount)).toString(),
          featuredProjectBackers: projectData.projects[0].contributions.length,
          featuredProjectDaysRemaining: getDaysRemaining(projectData.projects[0]),
          featuredProjectProfileId: projectData.projects[0].profile.id
        });
      },
      error: function () {
        console.log('error fetching projects!');
      }
    });
  }


  render() {
    return (
      <div>
      <div><Welcome /></div>
      <div id='home-body-container'>
        <OverallStats />
        <Segment style={{paddingTop: '-2%'}}>
          <Grid columns={1} padded>
            <FeaturedProject
              project={this.state.featuredProject}
              featuredProjectCreatorDisplayName={this.state.featuredProjectCreatorDisplayName}
              featuredProjectPercentFunded={this.state.featuredProjectPercentFunded}
              featuredProjectBackers={this.state.featuredProjectBackers}
              featuredProjectDaysRemaining={this.state.featuredProjectDaysRemaining}
              featuredProjectProfileId={this.state.featuredProjectProfileId}
            />
          </Grid>
        </Segment>
        <Segment>
          <div id='trending-projects-header-container'>
            <div className='basic-flex-centered-column'>
              <h3> Trending Projects </h3>
            </div>
          </div>
          <ProjectPreview projects={this.state.projects.slice(1)} userUpvotes={this.state.userUpvotes} />
        </Segment>
        <Footer />
      </div>
    </div>
    );
  }
}

export default Home;
