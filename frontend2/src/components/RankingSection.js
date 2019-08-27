import React from 'react';
import {
  Grommet,
  Box,
  Distribution,
  Text,
} from 'grommet';
import { grommet } from 'grommet/themes';

const RankingSection = () => (
  <Grommet theme={grommet}>
    <Distribution
      values={[
        { value: 50, color: 'light-5', name: '개인별 Ranking' },
        { value: 50, color: 'dark-6', name: '게임별 Ranking' },
      ]}
    >
      {value => (
        <Box pad="medium" background={value.color} fill align="center">
          <Text size="large">{value.name}</Text>
        </Box>
      )}
    </Distribution>
  </Grommet>
);

export default RankingSection;
