import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import Webcam from 'react-webcam';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Button from 'react-button';
import FlatButton from 'material-ui/FlatButton';
import SwitchButton from 'react-switch-button';


const style = {
  marginRight: 10,
  marginBottom: 2,

};
const buttonStyle = {
  float:"right",
  backgroundColor:"#33E0FF"
}

const Video = () => (
  <div className="video-wrapper">
    <Card>
      <div className="button_wrapper">
        <FloatingActionButton style={style}>

          <ContentAdd />
        </FloatingActionButton>
        <FlatButton label="Next" style={buttonStyle}/>
      </div>
      <div className="webcam">
        <CardText>
          <Webcam />
        </CardText>
      </div>
      <div className="switch">
      <SwitchButton name="switch-8" label="Switch mode" mode="select" labelRight="Off" label="On"/>
      </div>
    </Card>
  </div>
);

export default Video;