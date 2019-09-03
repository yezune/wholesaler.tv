import React from 'react';
import { Box } from 'grommet';
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

const VideoList = ({ items }) => (
  <Slider {...settings} margin={1}>
    { items.map((item, index) => (
        <Box>
          <img margin="xsmall" src={item.thumbUri} alt={item.title} />
        </Box>
      ))}
  </Slider>

);

export default VideoList;


