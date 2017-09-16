import React from 'react';
import { Button, Image, Popup } from 'semantic-ui-react';

class Upvote extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <Popup
          trigger={
            <Button circular
              icon='thumbs outline up'
              id='upvote-button'
              onClick={this.props.handleUpvote}
            />
          }
          content='Upvote project'
          position='left center'
        />
        <Image fluid src={this.props.project.photo_url}/>
      </div>
    );
  }
}

export default Upvote;