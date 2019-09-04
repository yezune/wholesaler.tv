import React from 'react';
import { Box, Text, Stack } from 'grommet';
import axios from 'axios';
// import { connect } from 'react-redux';
import VideoList from '../components/VideoList';
import LiveBanner from '../components/LiveBanner';
import DummyGameData from './DummyGameData';




class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick = (_e) => {
    console.log(_e);
  }

  componentDidMount = () => {
    let getVideos = () => {
      axios.get('/api/videos').then((response) => {
          console.log(response.data);
          console.log(response.status);
          console.log(response.statusText);
          console.log(response.headers);
          console.log(response.config);
          this.props.onReceive(response.data);
          setTimeout(getVideoData, 1000 * 5); // REPEAT THIS EVERy 5 SECONDS
        });
      getVideos();
    }
  }

  render() {
    return (
      <Box flex overflow="auto" direction="column">
        <Stack anchor="top-left">
          <LiveBanner
            items={Object.values(DummyGameData)}
          />
          <Box
            background="status-critical"
            pad={{ horizontal: 'xsmall' }}
            round
          >
            <Text color="white" weight="bold">On Air</Text>
          </Box>
        </Stack>
        <Box
          direction="column"
          pad={{ top: 'small', left: 'medium', right: 'medium' }}
        >
          <Box
            pad={{ top: 'small' }}
            gap="xsmall"
            direction="row"
            border={{ color: 'status-warning', size: 'xsmall', side: 'bottom' }}
          >
            <Text color="status-warning" size="small" weight="bold">Scheduled Broadcasting</Text>
          </Box>
          <Box pad={{ top: 'medium', right: 'medium', bottom: 'medium' }} gap="small">
            <VideoList items={Object.values(DummyGameData)} />
          </Box>
          <Box
            pad={{ top: 'small' }}
            gap="xsmall"
            direction="row"
            border={{ color: 'neutral-3', size: 'xsmall', side: 'bottom' }}
          >
            <Text color="neutral-3" size="small" weight="bold">Last Broadcasting</Text>
          </Box>
          <Box pad={{ top: 'medium', right: 'medium', bottom: 'medium' }} gap="small">
            <VideoList items={Object.values(DummyGameData)} />
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Landing;
