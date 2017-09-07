import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Button, Container, Grid, Header, Segment } from 'semantic-ui-react';
import Welcome from './components/welcome.jsx';
import Profile from './components/profile.jsx';
import CreateProject from './components/createProject.jsx';
import ViewProjects from './components/viewProjects.jsx';
import Messages from './components/messages.jsx';
import MenuBar from './components/menuBar.jsx';
import ProjectPreview from './components/projectPreview.jsx';
import FeaturedProject from './components/featuredProject.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>

          <div>

            <MenuBar />

            <Route exact={true} path='/' component={Welcome} />

            Featured Project

            <Segment>

              <Grid columns={1} padded>
                <FeaturedProject />
              </Grid>

            </Segment>

            Trending Projects

            <Segment>

              <Grid columns={2} padded>

                <Grid.Column>
                  <ProjectPreview />
                </Grid.Column>

                <Grid.Column>
                  <ProjectPreview />
                </Grid.Column>

                <Grid.Column>
                  <ProjectPreview />
                </Grid.Column>

                <Grid.Column>
                  <ProjectPreview />
                </Grid.Column>

                <Grid.Column>
                  <ProjectPreview />
                </Grid.Column>

                <Grid.Column>
                  <ProjectPreview />
                </Grid.Column>

              </Grid>

            </Segment>

          </div>

        </Router>
      </div>
    );
  }
}

export default App;



