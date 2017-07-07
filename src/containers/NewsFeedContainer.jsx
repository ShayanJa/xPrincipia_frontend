import React from 'react';
import img from '../assets/dnablackinvert.png';
import Header from '../containers/Header.jsx';
import ProfileUnit from '../components/profile/ProfileUnit.jsx';
import cookie from 'react-cookie'

export default class NewsFeedContainer extends React.Component {
    constructor(){
        super();
    
    }   

   render() {
      return (
    <div>
      <Header />
      <div id="newsFeedBox">
        <div id="newsFeedLeft">
            <div id="userInformation">
                <p id="userName">Fields</p>
                {/*<img src={require('../assets/dnablackinvert.png')} id="avatarImageProfile" width="150" height="150" alt="User Avatar, DNA Helix" />*/}
                {/*<p id="userEmail">{cookie.load('userName')}</p>*/}
            </div>
            <div id="userOptions">
                <div id="newsFeedFieldUnit">Physics</div>
                <div id="newsFeedFieldUnit">Astrophysics</div>
                <div id="newsFeedFieldUnit">Information Theory</div>
                <div id="newsFeedFieldUnit">Astrobiology</div>
                <div id="newsFeedFieldUnit">Quantum Physics</div>
                <div id="newsFeedFieldUnit">Machine Learning</div>
                <div id="newsFeedFieldUnit">Artificial Intelligence</div>
                <div id="newsFeedFieldUnit">Neural Networks</div>
                <div id="newsFeedFieldUnit">Consciousness</div>
                <div id="newsFeedFieldUnit">General Relativity</div>
                                
                <br />
                <p id="xp">XP</p>
            </div>
        </div>
        <div id="newsFeedRight">
            <div id="profileSidebarMenu">
                <div id="profileProblemsMenu">
                    <div id="solveTitle">Problems</div>
                    <div id="followedProblemsButton">Followed</div>
                    <div id="createdProblemsButton">Created</div>
                </div>
                <div id="profileSolutionsMenu">
                    <div id="developTitle">Solutions</div>
                    <div id="votedSolutionsButton">Voted</div>
                    <div id="createdSolutionsButton">Created</div>
                </div>
            </div>
            <div id="profileRightElements">
              <ProfileUnit />
              {/*<ProfileUnit />
              <ProfileUnit />
              <ProfileUnit />*/}
            </div>
            <div id="moreButton">
                More
            </div>
        </div>
      </div>
    </div>

      );
   }
}
