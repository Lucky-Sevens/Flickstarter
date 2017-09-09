import React from 'react';
import ReactDOM from 'react-dom';

<<<<<<< HEAD
import { Image, Segment } from 'semantic-ui-react';

class ProjectPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <div className="ui raised very padded text container segment fluid">
            <Image src='https:www.bettycrocker.com/-/media/Images/BC/recipe-heros/desserts/ultimate-chocolate-chip-cookies_hero.jpg?W=800' size='small' />
            <h2 className="ui header">Cookies by Fiona</h2>
          </div>
    );
  }

}

export default ProjectPreview;

// https:www.bettycrocker.com/-/media/Images/BC/recipe-heros/desserts/ultimate-chocolate-chip-cookies_hero.jpg?W=800
=======
import { Card, Grid, Icon, Image, Segment } from 'semantic-ui-react';

const ProjectPreview = (props) => (
  <div>
    <Grid columns={2} padded>
    {props.projects.map((project, index) =>
        <Grid.Column>

          <Card key={index}>

            <Image src={project.photo_url} />

            <Card.Content >

              <Card.Header>
                {project.name}
              </Card.Header>

              <Card.Meta>
                {project.short_description}
              </Card.Meta>

              <Card.Description>
               {project.long_description}
              </Card.Description>


            </Card.Content>

            <Card.Content extra>
              <a>
                Insert progress bar here.
              </a>

            </Card.Content>

          </Card>
        </Grid.Column>
    )}
    </Grid>
  </div>
);

export default ProjectPreview;
>>>>>>> Fixes Algolia bug
