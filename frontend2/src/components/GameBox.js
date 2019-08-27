import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  Box, Image, Anchor,
} from 'grommet';
import Genre from './Genre';
import Popularity from './Popularity';
import RouteGotoComponentBase from './RouteGotoComponentBase';

class GameBox extends RouteGotoComponentBase {
  render() {
    const game = this.props.item;
    return (
      <Box
        width="small"
        height="small"
        round="xsmall"
        align="center"
        justify="center"
        background={{ color: 'light-2', opacity: 'strong' }}
        margin="small"
      >
        <Image src={game.thumbUri} alignSelf="stretch" margin="small" />
        <Anchor size="small" align="center" onClick={() => this.goto(`/game/${game._id}`)}>{game.title}</Anchor>
        <Genre genre={game.genre} />
        <Popularity popularity={game.popularity} />
      </Box>
    );
  }
}

export default withRouter(GameBox);
