import React, { Component } from 'react';
import {
  Button,
  Box,
  Heading,
} from 'grommet';
import { BosSelect, BosTextInput } from './Components';

/* eslint-disable */
class BosOut extends Component {

  render() {
    return (
      <Box
      flex={false}
      >
        <Box
          align="center"
          direction="column"
          justify="center"
          gap="medium"
          pad="xlarge"
        >
          <Box align="center">
            <Heading level={3} margin='none'>
              <strong>Boscoin 출금</strong>
            </Heading> 
          </Box>
          <Box direction='column' gap='small' align='center' pad='xsmall'>
            <div>출금주소 선택</div><BosSelect />
          </Box>
          <Box direction='column' gap='small' align='center' pad='xsmall'>
            <div>출금금액 입력 (수수료 : 1Bos)</div><BosTextInput />
            <Button 
                label='출금' 
                primary={true} 
                onClick={() => {}} 
            />
          </Box>
        </Box>
      </Box>
    )
  };
}

export default BosOut;
