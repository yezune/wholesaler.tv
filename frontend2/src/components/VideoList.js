import React from 'react';
import {
  Grid, InfiniteScroll, Box,
} from 'grommet';
import GameBox from './GameBox';

const VideoList = ({ items }) => (
  <Box>
    <Grid alignSelf="center" columns="xsmall" rows="small" gap="xsmall">
      <InfiniteScroll items={items} step={12}>
        {item => (
          <GameBox key={item._id} item={item} />
        )}
      </InfiniteScroll>
    </Grid>
  </Box>
);

export default VideoList;
