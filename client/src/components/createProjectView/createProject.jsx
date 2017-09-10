import React from 'react';
import { Container, Header, Button, Segment, Message } from 'semantic-ui-react';
import $ from 'jquery';
import moment from 'moment';
import LandingGenre from './components/LandingGenre.jsx';
import LandingTitle from './components/LandingTitle.jsx';
import LandingLocation from './components/LandingLocation.jsx';
import ProjectImage from './components/projectImage.jsx';
import ProjectTitle from './components/projectTitle.jsx';
import ProjectBlurb from './components/projectBlurb.jsx';
import ProjectDescription from './components/projectDescription.jsx';
import ProjectGenre from './components/projectGenre.jsx';
import ProjectLocation from './components/projectLocation.jsx';
import ProjectDuration from './components/projectDuration.jsx';
import ProjectFundingGoal from './components/projectFundingGoal.jsx';
import SaveProjectModal from './components/saveProjectModal.jsx';

class CreateProject extends React.Component {
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
      currentPage: 'start',
      incompleteField: false,
      saving: false,
      showSaveModal: false
    };
    this.handleGenreSelection = this.handleGenreSelection.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleContinueClick = this.handleContinueClick.bind(this);
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

  handleContinueClick(event) {
    event.preventDefault();
    if (this.state.projectGenre !== '' && this.state.projectTitle !== '' && this.state.projectLocation) {
      this.setState({
        currentPage: 'details',
        incompleteField: false
      });
    } else {
      this.setState({
        incompleteField: true
      });
    }
  }

  handleSaveClick(event) {
    event.preventDefault();
    let _this = this;
    if (this.state.projectGenre !== '' && this.state.projectTitle !== '' && this.state.projectLocation !== '' && this.state.projectDuration !== '' && this.state.projectBlurb !== '' && this.state.projectDescription !== '' && this.state.projectFundingGoal !== '' && this.state.projectImage !== '') {
      $.ajax({
        url: '/api/projects/new',
        type: 'POST',
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
      <div id="saveAlert" style={{paddingTop: '5px'}}>
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
      var element = document.getElementById("saveAlert");
      element.scrollIntoView();
    }
  }

  render() {
    return (
      this.state.currentPage === 'start' ?
      <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#FFFFFF'}}>
        <div style={{textAlign: 'center', paddingTop: '20px', paddingBottom: '15px', marginTop: '55px'}}>
          <Header as='h1'>Create a project</Header>
        </div>
        <Segment raised style={{textAlign: 'center', width: '80%'}}> 
          <Container style={{width: '50%', paddingBottom: '30px', marginTop: '3%', marginBottom: '3%'}}>
            <LandingGenre handleGenreSelection={this.handleGenreSelection}/>
            <LandingTitle handleProjectTitleInput={this.handleInputChange}/>
            <LandingLocation handleProjectLocationInput={this.handleInputChange}/>
          </Container>
          <Button primary onClick={this.handleContinueClick}>Continue</Button>
          {
            this.state.incompleteField ? this.getWarningMessage() : null
          }
        </Segment>
      </div>
      :
      <div style={{width: '100%', height: '98%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', marginTop: '55px'}}>
        {
          this.state.showSaveModal ? <SaveProjectModal projectImage={this.state.projectImage} projectTitle={this.state.projectTitle} projectFundingGoal={this.state.projectFundingGoal} projectDescription={this.state.projectDescription} projectBlurb={this.state.projectBlurb} projectDuration={this.state.projectDuration} projectLocation={this.state.projectLocation} projectGenre={this.state.projectGenre} /> : null
        }
        <div style={{textAlign: 'center', paddingTop: '20px', paddingBottom: '22px', backgroundColor: '#FFFFFF'}}>
          <Header as='h1'>Let's get into the details</Header>
        </div>
        <Segment raised style={{width: '100%', textAlign: 'center'}}>
          <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', paddingBottom: '30px', marginTop: '7px'}}>
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

export default CreateProject;
