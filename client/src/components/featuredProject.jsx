import React from 'react';
import ReactDOM from 'react-dom';
import { Segment } from 'semantic-ui-react';

class FeaturedProject extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <div className="ui raised very padded text container segment fluid">
            <h2 className="ui header">Pinot Noir by Miles</h2>
            <p></p>
            <p></p>
          </div>
    );
  }

}

export default FeaturedProject;