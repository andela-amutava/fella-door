import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ParentComponent from './parentComponent.jsx';
import '../css/style.scss';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppBar
            title="FellowDoor"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        </MuiThemeProvider>
        <ParentComponent />
      </div>);
  }
}
