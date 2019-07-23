import * as React from 'react';
import Routes from '../Routes/index';

// global styles
import '../assets/scss/styles.scss';

class App extends React.Component {
  render() {
    return (
      <div className="has-navbar-fixed-top">
        <Routes />
      </div>
    );
  }
}

export default App;
