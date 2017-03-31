import React from 'react';
import './assets/App.css';
import './assets/index.css';
import Header from './components/Header.jsx';
import FullProblem from './components/FullProblem.jsx';
import SideBar from './components/SideBar.jsx';
import CreateSolution from './components/CreateSolution.jsx';
import SolutionContainer from './components/SolutionContainer.jsx';
import QuestionContainer from './components/QuestionContainer.jsx';
import SubProblemContainer from './components/SubProblemContainer.jsx';
import SuggestionContainer from './components/SuggestionContainer.jsx';
import SideBarMenu from './components/SideBarMenu.jsx';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
