import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Box, Text, Grid } from 'grommet';
import ReactPlayer from 'react-player';
import RouteGotoComponentBase from '../components/RouteGotoComponentBase';
import LiveChat from '../components/LiveChat';
import Price from '../assets/images/Price.png';
import Product from '../assets/images/Product.jpg';

console.log(Price);

class LiveTV extends RouteGotoComponentBase {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    match: PropTypes.object.isRequired
  };

  render() {
    const { match } = this.props;
    
    console.log(this.props);

    const videoId = match.params.videoId || null;

    if (videoId == null) {
      return (<Box alignSelf="center"><Text> {`File Not Found ${videoId}`} </Text></Box>);
    } 

    return (
      <Grid
        fill
        areas={[
          { name: "info", start: [0, 0], end: [0, 0] },
          { name: "video", start: [1, 0], end: [1, 0] },
          { name: "chat", start: [2, 0], end: [2, 0] },
          { name: "spacer1", start: [0, 1], end: [0, 1] },
          { name: "detail", start: [1, 1], end: [1, 1] },
          { name: "spacer2", start: [2, 1], end: [2, 1] },
        ]}
        columns={["small", "flex", "270px"]}
        rows={["medium","flex"]}
        gap="xxsmall"
      >
        <Box gridArea="info" background="light-3" >
          <Box flex><img width="100%" height="100%" src={`/${Price}`} alt="Price" /></Box>
        </Box>
        <Box gridArea="video" background="light-3" flex >
          <ReactPlayer
            controls
            url={`https://vimeo.com/${videoId}`}
            width="100%"
            height="100%"
          />
        </Box>
        <Box gridArea="chat" background="light-3">
          <LiveChat
            videoId={videoId}
          />
        </Box>
        <Box gridArea="spacer1" background="#FFFFFF"/>
        <Box gridArea="detail" background="#FFFFFF">
          <Box border="all" flex="shrink" alignSelf="center">
            <img src={`/${Product}`} alt="Price" border="false"/>
          </Box>
        </Box>
        <Box gridArea="spacer2" background="#FFFFFF"/>
      </Grid>
    );
  }
}

export default withRouter(LiveTV);
