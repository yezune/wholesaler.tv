import React from 'react';
import { Box } from 'grommet';
import RankingSection from '../components/RankingSection';
import RankingIndividual from '../components/RankingIndividual';
import RankingGame from '../components/RankingGame';

const RankingMain = () => (
  <Box flex="true">
    <RankingSection />
    <RankingIndividual />
    <RankingGame />
  </Box>
);

export default RankingMain;
