import React, { Component } from 'react';
import {
  Box,
  Grommet,
  Select,
  TextInput,
} from 'grommet';
import { grommet } from 'grommet/themes';
import PropTypes from 'prop-types';
import { deepMerge } from 'grommet/utils';

class BosTextInput extends Component {

  ref = React.createRef();

  render() {
    const { action, text } = this.props;
    return (
      <Box width="small">
        <TextInput ref={this.ref} value={text} onChange={action} />
      </Box>
    );
  }
}

const BosTheme = deepMerge(grommet, {
  global: {
    control: {
      border: {
        radius: '3px',
      },
    },
    input: {
      weight: 400,
    },
    font: {
      size: '11px',
    },
  },
  text: {
    medium: '13px',
  },
  textInput: {
    extend: 'padding: 0 12px;',
  },
  select: {
    control: {
      extend: 'padding: 3px 9px;',
      open: {
        background: '#ece0fa',
        border: '1px solid #7D4CDB',
      },
    },
  },
});


class BosSelect extends Component {
  static propTypes = {
    theme: PropTypes.shape({}),
  };

  static defaultProps = {
    theme: BosTheme,
  };

  state = {
    options: ['GDNAIWZ6TCQMA4UTEOSB3XTXE5TDWPLF2J5AUWJCQIQEZNROZLC5RFE2', 'GAMUDMUASMLU7Y74CLXD2YE5WSRLSNXXJBYCDTVVDWLBMUU6LP22MWHF'],
    value: '',
  };

  render() {
    const { theme } = this.props;
    const { options, value } = this.state;
    return (
      <Grommet theme={theme || grommet}>
        <Box fill align="center" justify="start" pad="small">
          <Select
            id="select"
            name="select"
            placeholder="Select"
            value={value}
            options={options}
            onChange={({ option }) => this.setState({ value: option })}
          />
        </Box>
      </Grommet>
    );
  }
}

export { BosTextInput, BosSelect };
