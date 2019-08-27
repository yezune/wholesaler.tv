import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class RouteGotoComponentBase extends Component {
  constructor(props) {
    super(props);
    this.goto = this.goto.bind(this);
  }

  goto(location) {
    this.props.history.push(location);
  }
}
export default RouteGotoComponentBase;
