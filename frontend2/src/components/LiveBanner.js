import React from 'react';
import Coverflow from 'react-coverflow';
import { withRouter } from 'react-router-dom';

const LiveBanner = () => (
  <Coverflow width="960" height="500"
  displayQuantityOfSide={2}
  navigation
  enableScroll
  clickable
  active={0}
  >
    <img src="https://via.placeholder.com/400x300.jpg?text=Penalty+Kicks(400x300)" alt="Panalty Kick" data-action="/account"/>
    <img src="https://via.placeholder.com/400x300.jpg?text=Penalty+Kicks(400x300)" alt="Panalty Kick"/>
    <img src="https://via.placeholder.com/400x300.jpg?text=Penalty+Kicks(400x300)" alt="Panalty Kick"/>
    <img src="https://via.placeholder.com/400x300.jpg?text=Penalty+Kicks(400x300)" alt="Panalty Kick"/>
    <img src="https://via.placeholder.com/400x300.jpg?text=Penalty+Kicks(400x300)" alt="Panalty Kick"/>
  </Coverflow>
);
export default withRouter(LiveBanner);
