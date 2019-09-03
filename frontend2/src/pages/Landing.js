import React from 'react';
import { Box, Text, Stack } from 'grommet';
import VideoList from '../components/VideoList';
import LiveBanner from '../components/LiveBanner';
import DummyGameData from './DummyGameData';

const Landing = () => (
  <Box flex overflow="auto" direction="column">
    <Stack anchor="top-left">
      <LiveBanner
        width="100%"
        videoId="322430790"
        fill
      />
      <Box
        background="status-critical"
        pad={{ horizontal: 'xsmall' }}
        round
      >
        <Text color="white" weight="bold">On Air</Text>
      </Box>
    </Stack>
    <Box
      direction="column"
      pad={{ top: 'small', left: 'medium', right: 'medium' }}
    >
      <Box
        pad={{ top: 'small' }}
        gap="xsmall"
        direction="row"
        border={{ color: 'status-warning', size: 'xsmall', side: 'top' }}
      >
        <Text color="status-warning" size="small" weight="bold">Scheduled Broadcasting</Text>
      </Box>
      <Box pad={{ top: 'medium', right: 'medium', bottom: 'medium' }} gap="small">
        <VideoList items={Object.values(DummyGameData)} />
      </Box>
      <Box
        pad={{ top: 'small' }}
        gap="xsmall"
        direction="row"
        border={{ color: 'neutral-3', size: 'xsmall', side: 'top' }}
      >
        <Text color="neutral-3" size="small" weight="bold">Last Broadcasting</Text>
      </Box>
      <Box pad={{ top: 'medium', right: 'medium', bottom: 'medium' }} gap="small">
        <VideoList items={Object.values(DummyGameData)} />
      </Box>
    </Box>
  </Box>
);

export default Landing;
