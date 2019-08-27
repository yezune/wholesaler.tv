import React from 'react';
import { Box, Button } from 'grommet';

const Footer = () => (
  <Box
    tag="footer"
    direction="row"
    justify="end"
    pad="medium"
    border={{ side: 'top' }}
    gap="small"
    flex={false}
  >
    <Button label="Cancel" color="border" onClick={() => {}} />
    <Button label="Add" primary onClick={() => {}} />
  </Box>
);

export default Footer;
