import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Heading, Box, Text, Paragraph, Image, Button } from 'grommet';
import { Login, Gamepad } from 'grommet-icons';
import RouteGotoComponentBase from '../components/RouteGotoComponentBase';
import LiveBanner from '../components/LiveBanner';
import DummyGameData from './DummyGameData';

class LiveTV extends RouteGotoComponentBase {
  static propTypes = {
    match: PropTypes.object.isRequired
  };

  render() {
    const { match } = this.props;
    const videoId = match.params.videoId || "322430790";
    return (
      <Box flex overflow="auto">
        <LiveBanner videoId={videoId} />
      </Box>
    );
  }
}

export default withRouter(LiveTV);
