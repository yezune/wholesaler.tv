import React from 'react';
import Coverflow from 'react-coverflow';
import { withRouter } from 'react-router-dom';
import { Box } from 'grommet';

const LiveBanner = ({ items }) => (
  <Coverflow
    width="960"
    height="500"
    displayQuantityOfSide={2}
    navigation
    enableScroll
    clickable
    active={0}
  >
    { items.map((item, index) => (
      <img key={item._id} src={item.imageUri} alt={item.title} data-action="/account" />
    ))}
  </Coverflow>
);
export default withRouter(LiveBanner);
