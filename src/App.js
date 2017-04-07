import React from 'react';
import './assets/App.css';
import './assets/index.css';


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
