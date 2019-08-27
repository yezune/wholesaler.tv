import React from 'react';
import { Box, Text } from 'grommet';
import * as Icons from 'grommet-icons';

const genres = {
  Action: Icons.Action,
  Adventure: Icons.Deploy,
  RolePlaying: Icons.Baby,
  Simulation: Icons.Aggregate,
  Strategy: Icons.Bug,
  Sports: Icons.Run,
  MMO: Icons.Send,
  Casual: Icons.Solaris,
  Party: Icons.Spa,
  Logic: Icons.Share,
  Travia: Icons.Trigger,
  Board: Icons.Dashboard,
  Card: Icons.Mastercard,
};

// eslint-disable-next-line react/prop-types
const Genre = ({ genre }) => (
  <Text>
    { genre }
  </Text>
);


export default Genre;
