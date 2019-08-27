import React from 'react';
import Vimeo from '@u-wave/react-vimeo';
import { Box } from 'grommet';
import LiveChat from './LiveChat';

const LiveBanner = ({ videoId }) => (
  <Box direction="row-responsive" gap="small" align="start">
    <Box pad="small">
      <Vimeo
        video={videoId}
        autoplay
      />
    </Box>
    <Box pad="small">
      <LiveChat videoId={videoId} />
    </Box>
  </Box>
);

export default LiveBanner;
