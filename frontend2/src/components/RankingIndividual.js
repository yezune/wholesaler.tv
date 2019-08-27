import React from 'react';

import {
  Grommet,
  Box,
  DataTable,
  Heading,
  Text,
} from 'grommet';

const columns = [
  {
    property: 'ThisWeekRank',
    header: <Text>This Week Rank</Text>,
    primary: true,
  },
  {
    property: 'Account',
    header: <Text>Account</Text>,
    primary: true,
  },
  {
    property: 'LastWeekRank',
    header: 'Last Week Rank',
    align: 'end',
  },
  {
    property: 'Amount',
    header: 'Amount',
    align: 'end',
  },
];

const data = [];
for (let i = 0; i < 40; i += 1) {
  data.push({
    ThisWeekRank: `2018-07-${(i % 30) + 1}`,
    Account: `Account ${i + 1}`,
    LastWeekRank: `2018-07-${(i % 30) + 1}`,
    Amount: ((i + 1) * 17) % 1000,
  });
}
const DATA = [
  {
    ThisWeekRank: 1,
    Account: 'Alan',
    LastWeekRank: 2,
    Amount: 999999,
  },
  {
    ThisWeekRank: 2,
    Account: 'Bryan',
    LastWeekRank: 4,
    Amount: 888888,
  },
  {
    ThisWeekRank: 3,
    Account: 'Chris',
    LastWeekRank: 6,
    Amount: 777777,
  },
  {
    ThisWeekRank: 4,
    Account: 'Eric',
    LastWeekRank: 8,
    Amount: 666666,
  },
  {
    ThisWeekRank: 5,
    Account: 'Doug',
    LastWeekRank: 1,
    Amount: 555555,
  },
  {
    ThisWeekRank: 6,
    Account: 'Jet',
    LastWeekRank: 3,
    Amount: 444444,
  },
  {
    ThisWeekRank: 7,
    Account: 'Michael',
    LastWeekRank: 7,
    Amount: 333333,
  },
  {
    ThisWeekRank: 8,
    Account: 'Tracy',
    LastWeekRank: 21,
    Amount: 222222,
  },
];

const RankingIndividual = () => (
  <Grommet>
    <Box align="center" pad="medium">
      <Heading>개인별 Ranking</Heading>
    </Box>
    <Box align="center" pad="small">
      <DataTable columns={columns} data={DATA} size="medium" />
    </Box>
  </Grommet>
);

export default RankingIndividual;
