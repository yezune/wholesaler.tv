import React from 'react';
import { Box } from 'grommet';
import { Star } from 'grommet-icons';

// eslint-disable-next-line react/prop-types
const Popularity = ({ popularity }) => (
  <Box direction="row" justify="start" align="center">
    {
        Array(popularity)
          .fill()
          .map((_, i) => (
            <Star size="small" key={i} />
          ))
    }
  </Box>
);
export default Popularity;
