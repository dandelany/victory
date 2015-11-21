import React from 'react';

// Analytics
import ga from 'react-ga';

class Docs extends React.Component {
  componentWillMount() {
    ga.pageview('/victory/docs');
  }

  render () {
    return (
      <div>
      <p>DOX LIVE HERE</p>
      <div>
        {this.props.children}
      </div>
      </div>
    );
  }
};

export default Docs;
