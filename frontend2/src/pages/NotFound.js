import React, { Component } from 'react';
import {
  Box, Heading, Paragraph,
} from 'grommet';

class NotFound extends Component {
  render() {
    return (
      <Box full align="center" justify="center">
        <Heading>Oops...</Heading>
        <Paragraph size="large" align="center">
          It seems that you are in the wrong route. Please check your URL and
          try again.
        </Paragraph>
      </Box>
    );
  }
}

export default NotFound;
