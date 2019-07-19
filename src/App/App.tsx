import * as React from 'react';

import '../assets/scss/styles.scss';

// components
import Home from '../pages/Home';

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;