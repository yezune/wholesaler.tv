import React from 'react';
import { Box, Text } from 'grommet';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import VideoBox from './VideoBox';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#999999" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#999999" }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 3,
  nextArrow: <SampleNextArrow/>,
  prevArrow: <SamplePrevArrow/>,
};

const VideoList = ({ videos }) => (
  <Slider {...settings} margin={1}>
    { videos.data
      .filter(video => (video.type !== 'live'))
      .map(video => (
        <Box key={video.uri}>
          <img margin="xsmall" src={video.pictures.sizes[1].link} alt={video.name} />
          <Text size="small">{video.name}</Text>
        </Box>
    ))}
  </Slider>
);

export default VideoList;


