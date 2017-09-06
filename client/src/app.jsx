import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Button, Container, Header } from 'semantic-ui-react';
import Home from './components/home.jsx';
import Profile from './components/profile.jsx';
import CreateProject from './components/createProject.jsx';
import ViewProjects from './components/viewProjects.jsx';
import Messages from './components/messages.jsx';
import MenuBar from './components/menuBar.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact={true} path='/' component={Home} />

            <Link to={'/createproject'}>
              <button>Create Project</button>
            </Link>

            <Link to={'/viewprojects'}>
              <button>View Projects</button>
            </Link>

            <Link to={'/profile'}>
              <button>Profile</button>
            </Link>

            <Link to={'/messages'}>
              <button>Messages</button>
            </Link>

            <MenuBar />

            <Route path='/createproject' component={CreateProject} />
            <Route path='/viewprojects' component={ViewProjects} />
            <Route path='/profile' component={Profile} />
            <Route path='/messages' component={Messages} />
          </div>
        </Router>
        <Container>
          <Header as='h1'>Hello world!</Header>

          <Button
            content='Discover docs'
            href='http://react.semantic-ui.com'
            icon='github'
            labelPosition='left'
          />
        </Container>
      </div>
    );
  }
}

export default App;

// ReactDOM.render(<App />, document.getElementById('root'));



