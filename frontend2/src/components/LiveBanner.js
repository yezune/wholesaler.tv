// import React from 'react';
// import Vimeo from '@u-wave/react-vimeo';
// import ReactPlayer from 'react-player';
// import { Box, Text, Carousel } from 'grommet';
// import Coverflow from 'react-coverflow';
// // import { Attraction, Car, TreeOption } from 'grommet-icons';
// // import LiveChat from './LiveChat';

// const LiveBanner = ({ videoId }) => (
//   <Box direction="row-responsive" gap="small" align="center">
//     <Carousel
//       fill
//     >
//       <Box alignSelf="center">
//         <ReactPlayer
//           url={`https://vimeo.com/${videoId}`}
//           playing={false}
//           controls
//         />
//       </Box>
//       <Box alignSelf="center">
//         <Vimeo
//           video={videoId}
//           controls
//         />
//       </Box>
//       <Box alignSelf="center">
//         <ReactPlayer
//           url={`https://vimeo.com/${videoId}`}
//         />
//       </Box>
//       <Box alignSelf="center">
//         <ReactPlayer
//           url={`https://vimeo.com/${videoId}`}
//         />
//       </Box>
//     </Carousel>
//     {/* <Box pad="small">
//       <LiveChat videoId={videoId} />
//     </Box> */}
//   </Box>
// );

// export default LiveBanner;

import React from 'react';
import { Box, Text, Carousel } from 'grommet';
import Coverflow from 'react-coverflow';

const LiveBanner = () => (
  <Coverflow width="960" height="500"
  displayQuantityOfSide={2}
  navigation
  enableScroll
  clickable
  active={0}
  >
    <img src="https://via.placeholder.com/400x300.jpg?text=Penalty+Kicks(400x300)" alt="Panalty Kick" data-action="/"/>
    <img src="https://via.placeholder.com/400x300.jpg?text=Penalty+Kicks(400x300)" alt="Panalty Kick"/>
    <img src="https://via.placeholder.com/400x300.jpg?text=Penalty+Kicks(400x300)" alt="Panalty Kick"/>
    <img src="https://via.placeholder.com/400x300.jpg?text=Penalty+Kicks(400x300)" alt="Panalty Kick"/>
    <img src="https://via.placeholder.com/400x300.jpg?text=Penalty+Kicks(400x300)" alt="Panalty Kick"/>
  </Coverflow> 
);
export default LiveBanner;
