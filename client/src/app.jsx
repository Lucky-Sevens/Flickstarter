import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Button, Container, Grid, Header, Segment } from 'semantic-ui-react';
import Home from './components/home.jsx';
import MenuBar from './components/menuBar.jsx';

=======
import $ from 'jquery';
import { Grid, Segment } from 'semantic-ui-react';

import FeaturedProject from './featuredProject.jsx';
import ProjectPreview from './projectPreview.jsx';
import Filter from './filter.jsx';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/api/projects',
      success: (projectData) => {
        console.log('ajax DATA', projectData);
        this.setState({
          projects: projectData
        });
      },
      error: function() {
        console.log('error fetching projects!');
      }
    });
  }
>>>>>>> Fixes Algolia bug

  render() {
    return (
<<<<<<< HEAD
      <div>
        <Router>

          <div>

            <MenuBar />

            <Route exact={true} path='/' component={Home} />

          </div>

        </Router>
=======
      <div style={{width: '94%', marginLeft: '3%', paddingtop: '55px'}}>
        Featured Project

        <Segment>

          <Grid columns={1} padded>
            <FeaturedProject />
          </Grid>

        </Segment>

        Trending Projects

        <Filter />

        <Segment>

          <ProjectPreview projects={this.state.projects} />

        </Segment>
>>>>>>> Fixes Algolia bug
      </div>
    );
  }
}

<<<<<<< HEAD
export default App;
=======
export default Home;
>>>>>>> Fixes Algolia bug
