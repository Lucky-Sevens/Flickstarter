import React from 'react';
import {Segment, Icon, Divider, Label} from 'semantic-ui-react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import $ from 'jquery';
import {commafy, getDaysRemaining} from '../../helpers.js';

import ProjectDetailHeader from './components/projectDetailHeader.jsx';
import ProjectDetailVideo from './components/projectDetailVideo.jsx';
import ProjectDetailStatus from './components/projectDetailStatus.jsx';
import SupportModal from '../supportModal.jsx';


class ProjectDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {},
      videoType: '',
      daysRemaining: '',
      videoId: '',
      raisedAmount: '',
      goalAmount: '',
      openRoles: [],
      userBacked: false,
      userContribution: {},
      upvoted: false,
      upvoteCount: 0
    };
    this.handleUpvote = this.handleUpvote.bind(this);
    this.informer = this.informer.bind(this);
  }

  informer(e) {
    let _this = this;
    _this.updateComponent();
  }

  handleUpvote() {
    let upvoteCount = this.state.upvoteCount;
    let isUpvoted = this.state.upvoted;
    this.setState({
      upvoteCount: isUpvoted ? upvoteCount - 1 : upvoteCount + 1,
      upvoted: isUpvoted ? false : true
    });
    $.ajax({
      url: '/followsUpvotes/upvote',
      type: 'POST',
      data: {
        projectId: this.state.project.id
      },
      error: (err) => {
        console.log(err.statusText, err);
      }
    });
  }

  updateComponent() {
    let _this = this;
    $.ajax({
      url: `/projects/${this.props.match.params.id}`,
      type: 'GET',
      success: (data) => {
        _this.setState({
          project: data.project,
          videoId: data.project.video_url.includes('vimeo') ? data.project.video_url.substr(data.project.video_url.length - 9) : data.project.video_url.substr(data.project.video_url.length - 11),
          videoType: data.project.video_url.includes('vimeo') ? 'vimeo' : 'youtube',
          daysRemaining: getDaysRemaining(data.project),
          raisedAmount: commafy(data.project.raised_amount),
          goalAmount: commafy(data.project.goal_amount),
          openRoles: data.openRoles,
          userBacked: data.userContribution ? true : false,
          userContribution: data.userContribution,
          upvoted: data.userUpvotes[data.project.id] ? true : false,
          upvoteCount: data.project.upvote_count
        });
      },
      error: (err) => {
        console.log(err.statusText, err);
      }
    });
  }

  componentWillMount() {
    let _this = this;
    _this.updateComponent();
  }

  render() {
    return (
      <div className="page-header-padding">
        <div className='body-container'>
          <Segment raised padded>
            <ProjectDetailHeader
              project={this.state.project}
            />
            <div className='basic-flex-row'>
              <ProjectDetailVideo
                videoType={this.state.videoType}
                videoId={this.state.videoId}
                project={this.state.project}
                handleUpvote={this.handleUpvote}
                upvoted={this.state.upvoted}
                upvoteCount={this.state.upvoteCount}
              />
              <ProjectDetailStatus
                informer={this.informer}
                project={this.state.project}
                raisedAmount={this.state.raisedAmount}
                goalAmount={this.state.goalAmount}
                daysRemaining={this.state.daysRemaining}
                userBacked={this.state.userBacked}
                userContribution={this.state.userContribution}
              />
            </div>
            <Divider horizontal/>
            <div className='project-detail-about'>
              <h2> About this project </h2>
              {this.state.project.long_description}
            </div>
            <Divider horizontal />
            {this.state.openRoles.length > 0 ?
              <div className='project-detail-about' >
                <h2> Open roles </h2>
                {this.state.openRoles.map((role, index) =>
                  <Label key={index}>{role}</Label>
                )}
                <br/>
                Contact
                <Link to={`/profile/${this.state.project.profile.id}`}>
                  {' ' + this.state.project.profile.display + ' '}
                </Link>
                if you are interested in helping with this project.
              </div> : null
            }
            <Divider horizontal />
          </Segment>
        </div>
      </div>
    );
  }
}

export default ProjectDetails;
