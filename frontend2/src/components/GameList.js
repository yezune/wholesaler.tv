import React from 'react';
import {
  Grid, InfiniteScroll,
} from 'grommet';
import GameBox from './GameBox';

const GameList = ({ items }) => (
  <Grid columns="xsmall" rows="small" gap="xsmall">
    <InfiniteScroll items={items} step={12}>
      {item => (
        <GameBox key={item._id} item={item} />
      )}
    </InfiniteScroll>
  </Grid>
);

export default GameList;
