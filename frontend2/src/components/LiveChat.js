import React from 'react';
import { Box } from 'grommet';
import Iframe from 'react-iframe';

const LiveChat = ({ videoId }) => (
      <Iframe id={videoId} src={`https://vimeo.com/live-chat/${videoId}`} width={400} height={600} frameBorder={0}/>
);

export default LiveChat;
