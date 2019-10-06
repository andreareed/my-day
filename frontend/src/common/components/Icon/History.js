import React from 'react';
import PropTypes from 'prop-types';

const History = ({ width, height, fill }) => {
  /* eslint-disable max-len */
  return (
    <svg width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M504,255.5c0.3,136.6-111.2,248.4-247.8,248.5c-64,0-122.4-24.2-166.4-63.9c-5.1-4.6-5.3-12.5-0.4-17.4l17-17
c4.5-4.5,11.8-4.7,16.6-0.4c35.4,31.5,82,50.7,133.1,50.7c110.5,0,200-89.5,200-200c0-110.5-89.5-200-200-200
c-55.5,0-105.7,22.6-141.9,59l49.1,48.4c7.6,7.5,2.3,20.5-8.4,20.5H26.4c-6.6,0-12-5.4-12-12V45.4c0-10.7,12.8-16,20.4-8.5
l45.1,44.5C124.9,36.1,187.1,8,256,8C392.8,8,503.7,118.8,504,255.5z M336.9,345.7l14.1-19.4c3.9-5.4,2.7-12.9-2.6-16.8L280,259.8
V116c0-6.6-5.4-12-12-12h-24c-6.6,0-12,5.4-12,12v168.2l88.2,64.1C325.5,352.2,333,351.1,336.9,345.7z"
      />
    </svg>
  );
  /* eslint-enable */
};

History.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};

History.defaultProps = {
  width: '24px',
  height: '24px',
  fill: '#fff',
};

export default History;
