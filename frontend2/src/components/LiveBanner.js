import React from 'react';
import { withRouter } from 'react-router-dom';
import Coverflow from 'react-coverflow';

const LiveBanner = ({ videos }) => (
  <Coverflow
    width="960"
    height="500"
    displayQuantityOfSide={2}
    navigation
    enableScroll
    clickable
    active={0}
  > 
    { 
      videos.data
        .filter(video => (video.type === 'live'))
        .map(video => (
          <img key={video.uri} src={video.pictures.sizes[3].link} alt={video.name} data-action={video.link} />
        ))
    }
  </Coverflow>
);
export default withRouter(LiveBanner);
