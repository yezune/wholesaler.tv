import React from 'react';
import { Box, Text, Stack } from 'grommet';
import axios from 'axios';
// import { connect } from 'react-redux';
import VideoList from '../components/VideoList';
import LiveBanner from '../components/LiveBanner';
import DummyGameData from './DummyGameData';


let VIODES_SERVICE_URL='/api/videos';


class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onReceive = this.onReceive.bind(this);
  }

  onClick = (_e) => {
    console.log(_e);
  }

  onReceive = ( props ) => {
    console.log('onReceive');
  }

  componentDidMount = () => {
    console.log("componentDidMount");

    let getVideos = () => {
      this.setState({...this.state, isFetching: true });
      axios.get(VIODES_SERVICE_URL).then((response) => {
        this.setState({ videos: response.data, isFetching: false })
      }).catch(e => console.log(e));
      setTimeout(getVideos, 1000 * 60); // REPEAT THIS EVERy 5 SECONDS
    };
    getVideos();
  }

  // fetchVideos = () => {
  //   this.setState({...this.state, isFetching: true });
  //   axios.get(VIODES_SERVICE_URL)
  //     .then(response => this.setState({ videos: response.data, isFetching: false }))
  //     .catch(e => console.log(e));
  //   setTimeout(this.fetchVideos, 1000 * 5);
  // }

  render() {
    const { videos } = this.state || {};

    console.log('render()', videos);

    if (!videos)
      return (<Box align="center"><Text> Loading... </Text></Box>);

    return (
      <Box flex overflow="auto" direction="column">
        <Stack anchor="top-left">
          <LiveBanner
            videos={videos}
          />
          <Box
            background="status-critical"
            pad={{ horizontal: 'xsmall' }}
            round
          >
            <Text color="white" weight="bold">Live</Text>
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
            <VideoList videos={videos} />
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
            <VideoList videos={videos} />
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Landing;
