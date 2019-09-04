import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Box, Text, Grid, Image, Button, Distribution } from 'grommet';
import ReactPlayer from 'react-player';
import RouteGotoComponentBase from '../components/RouteGotoComponentBase';
import LiveChat from '../components/LiveChat';
import Price from '../assets/images/Price.png';

console.log(Price);

class LiveTV extends RouteGotoComponentBase {
  static propTypes = {
    match: PropTypes.object.isRequired
  };

  render() {
    const { match } = this.props;
    const videoId = match.params.videoId || "356830259";
    return (
      <Grid
        fill
        areas={[
          { name: "info", start: [0, 0], end: [0, 0] },
          { name: "video", start: [1, 0], end: [1, 0] },
          { name: "chat", start: [2, 0], end: [2, 0] },
          { name: "detail", start: [0, 1], end: [2, 1] },
        ]}
        columns={["small", "flex", "270px"]}
        rows={["medium","flex"]}
        gap="xxsmall"
      >
        <Box gridArea="info" background="light-3" >
          <Box round><img src={Price} alt="Price" /></Box>
        </Box>
        <Box gridArea="video" background="light-3" flex >
          <ReactPlayer
            controls
            url={`https://vimeo.com/${videoId}`}
            width="100%"
            height="100%"
          />
        </Box>
        <Box gridArea="chat" background="light-3" >
          <LiveChat
            videoId={videoId}
          />
        </Box>
        <Box gridArea="detail" background="light-3" >
        </Box>
      </Grid>
    );
  }
}

export default withRouter(LiveTV);
