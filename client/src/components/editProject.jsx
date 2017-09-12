import React from 'react';
import { Header, Button, Segment, Message } from 'semantic-ui-react';
import $ from 'jquery';
import moment from 'moment';
import LandingPage from './createProjectView/components/landingView/landingPage.jsx';
import ProjectImage from './createProjectView/components/projectImage.jsx';
import ProjectTitle from './createProjectView/components/projectTitle.jsx';
import ProjectBlurb from './createProjectView/components/projectBlurb.jsx';
import ProjectDescription from './createProjectView/components/projectDescription.jsx';
import ProjectGenre from './createProjectView/components/projectGenre.jsx';
import ProjectLocation from './createProjectView/components/projectLocation.jsx';
import ProjectDuration from './createProjectView/components/projectDuration.jsx';
import ProjectFundingGoal from './createProjectView/components/projectFundingGoal.jsx';
import SaveProjectModal from './createProjectView/components/saveProjectModal.jsx';

class EditProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectGenre: '',
      projectTitle: '',
      projectLocation: '',
      projectDuration: '',
      projectBlurb: '',
      projectDescription: '',
      projectFundingGoal: '',
      projectImage: '',
      incompleteField: false,
      saving: false,
      showSaveModal: false
    };
    this.handleGenreSelection = this.handleGenreSelection.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getWarningMessage = this.getWarningMessage.bind(this);
    this.getUploadWidget = this.getUploadWidget.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  };

  handleGenreSelection(event, data) {
    event.preventDefault();
    this.setState({
      projectGenre: data.value, genreDropdownText: data.value, incompleteField: false
    });
  }

  handleInputChange(event, data) {
    event.preventDefault();
    this.setState({
      [event.target.name]: data.value,
      incompleteField: false
    });
  }

  handleSaveClick(event) {
    event.preventDefault();
    let _this = this;
    if (this.state.projectGenre !== '' && this.state.projectTitle !== '' && this.state.projectLocation !== '' && this.state.projectDuration !== '' && this.state.projectBlurb !== '' && this.state.projectDescription !== '' && this.state.projectFundingGoal !== '' && this.state.projectImage !== '') {
      $.ajax({
        url: '/api/projects/update',
        type: 'PUT',
        data: {
          name: this.state.projectTitle, 
          shortDescription: this.state.projectBlurb,
          longDescription: this.state.projectDescription,
          location: this.state.projectLocation,
          photoUrl: this.state.projectImage,
          goalAmount: this.state.projectFundingGoal,
          goalDeadline: moment().add(this.state.projectDuration, 'days').calendar(),
          genre: this.state.projectGenre
        },
        success: () => {
          _this.setState({
            saving: false,
            showSaveModal: true
          });
        },
        error: (err) => {
          console.log(err.statusText, err);
        }
      });
      this.setState({
        saving: true,
        incompleteField: false
      });
    } else {
      this.setState({
        incompleteField: true
      });
    }
  }

  getWarningMessage() {
    return (
      <div id="saveProjectWarningAlert">
        <Message color='red' negative>
          <Message.Header>You must complete each field to continue. </Message.Header>
        </Message>
      </div>
    )
  }

   getUploadWidget() {
    let _this = this;
    cloudinary.openUploadWidget({ cloud_name: 'dyrrwpemp', upload_preset: 'us2utltx'},
      function(error, result) {
        _this.setState({
          projectImage: result[0].url
        });
      });
  }

  componentDidUpdate() {
    if (this.state.incompleteField === true) {
      let element = document.getElementById("saveProjectWarningAlert");
      element.scrollIntoView();
    }
  }

  componentWillMount() {
    $.ajax({
      url: `/api/projects/:${creator_id}`,
      type: 'GET',
      success: () => {
        _this.setState({
          saving: false,
          showSaveModal: true
        });
      },
      error: (err) => {
        console.log(err.statusText, err);
      }
    });
  }

  render() {
    return (
      <div id='create-project-detail-body'>
        {
          this.state.showSaveModal ? 
          <SaveProjectModal 
            projectImage={this.state.projectImage} 
            projectTitle={this.state.projectTitle} 
            projectFundingGoal={this.state.projectFundingGoal} 
            projectDescription={this.state.projectDescription} 
            projectBlurb={this.state.projectBlurb} 
            projectDuration={this.state.projectDuration} 
            projectLocation={this.state.projectLocation} 
            projectGenre={this.state.projectGenre} 
          /> : null
        }
        <div id='create-project-detail-header'>
          <Header as='h1'>Edit your project</Header>
        </div>
        <Segment raised id='create-project-detail-segment'>
          <div id='create-project-detail-container'>
            <ProjectImage 
              getUploadWidget={this.getUploadWidget} 
              projectImage={this.state.projectImage}
            />
            <ProjectTitle 
              handleProjectTitleInput={this.handleInputChange} 
              projectTitle={this.state.projectTitle}
            />
            <ProjectBlurb handleBlurbInput={this.handleInputChange}/>
            <ProjectDescription handleDescriptionInput={this.handleInputChange}/>
            <ProjectGenre 
              handleGenreSelection={this.handleGenreSelection} 
              projectGenre={this.state.projectGenre}
            />
            <ProjectLocation 
              handleProjectLocationInput={this.handleInputChange} 
              projectLocation={this.state.projectLocation}
            />
            <ProjectDuration handleProjectDurationInput={this.handleInputChange}/>
            <ProjectFundingGoal handleFundingGoalInput={this.handleInputChange}/>
          </div>
          {this.state.saving ? <Button loading primary onClick={this.handleSaveClick}>Save</Button> : <Button primary onClick={this.handleSaveClick}>Save</Button>}
          {this.state.incompleteField ? this.getWarningMessage() : null}
        </Segment>
      </div>
    );
  }
}

export default EditProject;
