import React from 'react';
import $ from 'jquery';
import { Grid, Segment, Header, Dropdown, Button, Input, Icon } from 'semantic-ui-react';

import ProjectPreview from './projectPreview.jsx';
import SearchInput, { createFilter } from 'react-search-input';

const KEYS_TO_FILTERS = ['name', 'short_description', 'long_description', 'location'];

const colors = ['yellow', 'red', 'blue', 'green', 'black', 'pink', 'grey', 'purple', 'teal', 'orange', 'brown'];

const itemOpts = [
  { key: 1,
    text: 'Action',
    value: 'Action',
    label: { color: 'red', empty: true, circular: true },
  },
  { key: 2,
    text: 'Adventure',
    value: 'Adventure',
    label: { color: 'blue', empty: true, circular: true },
  },
  { key: 3,
    text: 'Animated',
    value: 'Animated',
    label: { color: 'yellow', empty: true, circular: true },
  },
  { key: 4,
    text: 'Comedy',
    value: 'Comedy',
    label: { color: 'green', empty: true, circular: true },
  },
  { key: 5,
    text: 'Crime',
    value: 'Crime',
    label: { color: 'black', empty: true, circular: true },
  },
  { key: 6,
    text: 'Documentary',
    value: 'Documentary',
    label: { color: 'pink', empty: true, circular: true },
  },
  { key: 7,
    text: 'Drama',
    value: 'Drama',
    label: { color: 'grey', empty: true, circular: true },
  },
  { key: 8,
    text: 'Musical',
    value: 'Musical',
    label: { color: 'purple', empty: true, circular: true },
  },
  { key: 9,
    text: 'Science Fiction',
    value: 'Science Fiction',
    label: { color: 'teal', empty: true, circular: true },
  },
  { key: 10,
    text: 'War',
    value: 'War',
    label: { color: 'orange', empty: true, circular: true },
  },
  { key: 11,
    text: 'Western',
    value: 'Western',
    label: { color: 'brown', empty: true, circular: true },
  }
];


class ExploreProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      searchTerm: '',
      filterTerm: null,
      userUpvotes: []
    };
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/projects/explore',
      success: (projectData) => {
        this.setState({
          projects: projectData.projects,
          userUpvotes: projectData.userUpvotes
        });
      },
      error: function () {
        console.log('error fetching projects!');
      }
    });
  }

  searchUpdated (term) {
    this.setState({searchTerm: term});
  }

  getSelected(e, {value}) {
    this.setState({filterTerm: value});
  }

  handleReset() {
    this.setState({filterTerm: null});
  }

  render() {
    const tagOptions = this.state.projects.concat({genre: null}).map(project => {
      return {
        text: project.genre,
        value: project.genre,
        label: { color: colors[Math.floor(Math.random() * colors.length)], empty: true, circular: true }
      };
    });

    let filteredMovies = this.state.projects.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
    filteredMovies = this.state.filterTerm ? this.state.projects.filter(project => project.genre === this.state.filterTerm) : filteredMovies;


    return (
      <div style={{ width: '94%', margin: '2% 0% 0% 3%', paddingTop: '55px' }}>

        <Input
          size='massive'
          icon={<Icon name='search' inverted circular />}
          placeholder='Search...'
        >
          <SearchInput className="search-input" onChange={this.searchUpdated.bind(this)} />
        </Input>

        <Segment>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: '2%', marginRight: '2%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3> Explore Projects </h3>
            </div>
            <div>

              <Button onClick={this.handleReset.bind(this)}>
                Reset
              </Button>

              <Dropdown
                onChange={this.getSelected.bind(this)}
                options={itemOpts}
                selection
                text='Filter Posts' icon='filter' floating labeled button className='icon'
              />

            </div>
          </div>
          <ProjectPreview projects={filteredMovies} userUpvotes={this.state.userUpvotes}/>
        </Segment>
      </div>
    );
  }
}


export default ExploreProjects;
