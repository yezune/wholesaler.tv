import React from 'react';
import { Box, Text } from 'grommet';

const Footer = () => (
  <Box
    tag="footer"
    direction="row"
    justify="center"
    pad="medium"
    gap="small"
    flex={false}
  >
    <Text weight="normal" size="small"> Copyright ⓒ The WholesalerTv. All rights reserved. </Text>
  </Box>
);

export default Footer;
