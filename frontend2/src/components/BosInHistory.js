/* eslint-disable */
import {
  Grommet,
  Box,
  Button,
  DataTable,
  Text,
} from 'grommet';
import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';

const columns = [
  {
    property: 'Account',
    header: <Text>Account</Text>,
    primary: true,
    footer: 'Total',
  },
  {
    property: 'date',
    header: 'Date',
    render: datum => datum.date && new Date(datum.date).toLocaleDateString('en-US'),
    align: 'end',
  },
  {
    property: 'Amount',
    header: 'Amount',
    align: 'end',
    aggregate: 'sum',
    footer: { aggregate: true },
  },
];

const data = [];
for (let i = 0; i < 40; i += 1) {
  data.push({
    Account: `Account ${i + 1}`,
    date: `2018-07-${(i % 30) + 1}`,
    Amount: ((i + 1) * 17) % 1000,
  });
}
const DATA = [
  {
    Account: 'Alan',
    date: '',
    Amount: 0,
  },
  {
    Account: 'Bryan',
    date: '2018-06-10',
    Amount: 1234,
  },
  {
    Account: 'Chris',
    date: '2018-06-09',
    Amount: 2345,
  },
  {
    Account: 'Eric',
    date: '2018-06-11',
    Amount: 3456,
  },
  {
    Account: 'Doug',
    date: '2018-06-10',
    Amount: 1234,
  },
  {
    Account: 'Jet',
    date: '2018-06-09',
    Amount: 3456,
  },
  {
    Account: 'Michael',
    date: '2018-06-11',
    Amount: 1234,
  },
  {
    Account: 'Tracy',
    date: '2018-06-10',
    Amount: 2345,
  },
];

class BosInHistory extends Component {
  constructor( props ){
    super( props );
    this.checkDeposit = this.checkDeposit.bind(this);
  }

  checkDeposit = () => {
    axios.get('http://127.0.0.1:3000/api/bank/'+ this.props.user.email+'/check')
    .then(function(res){
      if (res.status == 200){
        console.log(res);
      }
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  render() {
    const { checkDeposit } = this;
    return (
      <Grommet>
        <Box align="center">
          <Text>Bos In & Out History</Text>
        </Box>
        <Box align="center" pad="small">
          <DataTable columns={columns} data={DATA} size="medium" />
        </Box>
        <div align="center">
          <Button
            label='Deposit confirm request'
            primary={true}
            onClick={ checkDeposit }
          />
        </div>
      </Grommet>
    )
  }
}

const mapStateToProps = state => ({
  user: state.account.user,
  authenticated: state.account.authenticate,
  checked: state.account.checked,
});

export default connect(mapStateToProps)(BosInHistory);
