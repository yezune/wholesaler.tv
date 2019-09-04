import React from 'react';
import { Box } from 'grommet';
import Iframe from 'react-iframe';

const LiveChat = ({ videoId }) => (
    <Iframe 
        width="100%"
        height="100%"
        id={videoId}
        src={`https://vimeo.com/live-chat/${videoId}`}
        frameBorder={0}
    />
);

export default LiveChat;