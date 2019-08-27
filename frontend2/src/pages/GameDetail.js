import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  Heading, Box, Text, Paragraph, Image, Button,
} from 'grommet';
import { Login, Gamepad } from 'grommet-icons';
import RouteGotoComponentBase from '../components/RouteGotoComponentBase';
import Popularity from '../components/Popularity';
import Genre from '../components/Genre';
import DummyGameData from './DummyGameData';

class GameDetail extends RouteGotoComponentBase {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };

  render() {
    const { match } = this.props;
    const game = DummyGameData[match.params.gameId];
    return (
      <Box fill alignSelf="center">
        <Heading alignSelf="center">
          {game.title}
        </Heading>
        <Box>
          <Image src={game.imageUri} />
        </Box>
        <Popularity popularity={game.popularity} />
        <Genre genre={game.genre} />
        <Paragraph alignSelf="center" size="medium">
          {game.desc}
        </Paragraph>
        <Box direction="row" alignSelf="center">
          <Button
            active
            icon={<Login />}
            label="Log In"
            onClick={() => this.goto('/login')}
            margin="small"
          />
          <Button
            icon={<Gamepad />}
            label="Play Solo"
            onClick={() => this.goto('/game')}
            margin="small"
          />
        </Box>
        <Text>
          { match.params.gameId }
        </Text>
      </Box>
    );
  }
}

export default withRouter(GameDetail);
