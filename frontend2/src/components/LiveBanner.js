import React from 'react';
import { withRouter } from 'react-router-dom';
import Coverflow from 'react-coverflow';
import { Image, Anchor } from 'grommet';
import RouteGotoComponentBase from './RouteGotoComponentBase';

class LiveBanner extends RouteGotoComponentBase {
  constructor(props) {
    super(props);
    this.parseUrl = this.parseUrl.bind(this);
    this.goLive = this.goLive.bind(this);
  }

  parseUrl = (url) => {
    let pattern = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
    let matches =  url.match(pattern);
    return {
      scheme: matches[2],
      authority: matches[4],
      path: matches[5],
      query: matches[7],
      fragment: matches[9],
    };
  }

  goLive = (link) => {
    const liveUri = '/live' + this.parseUrl(link).path;
    this.goto(liveUri);
  }

  render() {
    const { videos } = this.props;
    return (
      <Coverflow
        width="960"
        height="500"
        displayQuantityOfSide={2}
        navigation
        enableScroll
        clickable
        active={0}
      >
        {
          videos.data
            .filter(video => (video.type === 'live'))
            .map(video => (
              <Image
                key={video.uri}
                src={video.pictures.sizes[3].link}
                alt={video.name}
                onClick={() => this.goLive(video.link)}
              />
            )
          )
        }
      </Coverflow>
    );
  }
}
export default withRouter(LiveBanner);
