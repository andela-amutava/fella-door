
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Sidebar from './sidebar.jsx';
import Webcam from './video.jsx';

export default class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <MuiThemeProvider>
          <Sidebar />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Webcam />
        </MuiThemeProvider>
      </div>
    );
  }
}