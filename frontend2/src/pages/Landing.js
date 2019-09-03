import React from 'react';
import { Box } from 'grommet';
import GameList from '../components/GameList';
import LiveBanner from '../components/LiveBanner';
import DummyGameData from './DummyGameData';


const Landing = () => (
  <Box flex overflow="auto">
    <LiveBanner
      width="100%"
      videoId="322430790"
      fill
    />
    <Box pad={{ top: 'medium' }} gap="small">
      <GameList items={Object.values(DummyGameData)} />
    </Box>
  </Box>
);

export default Landing;
