import React from 'react';
import {
  Box, Grid, InfiniteScroll,
} from 'grommet';
import GameBox from './GameBox';

const GameList = ({ items }) => (
  <Box alignSelf="center" fill>
    <Grid columns="xsmall" rows="xsmall" gap="xsmall">
      <InfiniteScroll items={items} step={12}>
        {item => (
          <GameBox key={item._id} item={item} />
        )}
      </InfiniteScroll>
    </Grid>
  </Box>
);

export default GameList;
