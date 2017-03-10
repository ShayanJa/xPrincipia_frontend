import React from 'react';
import './assets/App.css';
import './assets/Create.css';
import Header from './components/Header.jsx'
import Problem from './components/Problem.jsx'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div id="main">

        </div>
        <Problem />
        {this.props.children}

      </div>
    );
  }
}

export default App;