import React from 'react';
import { Button, Image, Popup } from 'semantic-ui-react';

const Upvote = (props) =>{
  return (
    <div>
    {
      props.upvoted ? 
      <Popup
        trigger={
          <Button circular
            icon='thumbs up'
            id='upvote-button-clicked'
            onClick={props.handleUpvote}
          />
        }
        content='Undo upvote'
        position='left center'
      /> :
      <Popup
        trigger={
          <Button circular
            icon='thumbs up outline'
            id='upvote-button'
            onClick={props.handleUpvote}
          />
        }
        content='Upvote project'
        position='left center'
      />
    }
      <Image fluid src={props.project.photo_url}/>
    </div>
  );
}

export default Upvote;