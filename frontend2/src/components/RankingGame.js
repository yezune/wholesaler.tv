import React from 'react';

import { 
  Grommet,
  Box,
  DataTable,
  Text,
  Heading,
} from 'grommet';

const columns = [
  {
    property: 'Game',
    header: <Text>Game</Text>,
    primary: true,
  },
  {
    property: 'Genre',
    header: 'Genre',
    align: 'end',
  },
  {
    property: 'Amount',
    header: 'Amount',
    align: 'end',
  },
];

const DATA = [
  {
    Game: '지렁이',
    Genre: 'Racing',
    Amount: 1000000,
  },
  {
    Game: '주사위',
    Genre: 'Gamble',
    Amount: 900000,
  },
  {
    Game: '고스톱',
    Genre: 'Gamble',
    Amount: 800000,
  },
  {
    Game: '퍼즐',
    Genre: 'Puzzle',
    Amount: 700000,
  },
  {
    Game: '로또',
    Genre: 'Lottery',
    Amount: 600000,
  },
  {
    Game: '탁구',
    Genre: 'Sports',
    Amount: 500000,
  },
  {
    Game: '테니스',
    Genre: 'Sports',
    Amount: 400000,
  },
  {
    Game: '테트리스',
    Genre: 'Puzzle',
    Amount: 300000,
  },
];

const RankingGame = () => (
  <Grommet>
    <Box align="center" pad="medium">
      <Heading>Game별 Ranking</Heading>
    </Box>
    <Box align="center" pad="small">
      <DataTable columns={columns} data={DATA} size="medium" />
    </Box>
  </Grommet>
);

export default RankingGame;
