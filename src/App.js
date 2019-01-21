import React, { Component } from 'react';
import ReactDOM from 'react';

class App extends Component {
  state = {  }
  render() {
    return ( <div>I'm an App!</div> );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));