import React from 'react';
import PropTypes from 'prop-types';

const Chart = ({ width, height, fill }) => {
  /* eslint-disable max-len */
  return (
    <svg width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M396.8,352h22.4c6.4,0,12.8-6.4,12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4,0-12.8,6.4-12.8,12.8v230.4
C384,345.6,390.4,352,396.8,352z M204.8,352h22.4c6.4,0,12.8-6.4,12.8-12.8V140.8c0-6.4-6.4-12.8-12.8-12.8h-22.4
c-6.4,0-12.8,6.4-12.8,12.8v198.4C192,345.6,198.4,352,204.8,352z M300.8,352h22.4c6.4,0,12.8-6.4,12.8-12.8V204.8
c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4,0-12.8,6.4-12.8,12.8v134.4C288,345.6,294.4,352,300.8,352z M496,400H48V80
c0-8.8-7.2-16-16-16H16C7.2,64,0,71.2,0,80v336c0,17.7,14.3,32,32,32h464c8.8,0,16-7.2,16-16v-16C512,407.2,504.8,400,496,400z
 M108.8,352h22.4c6.4,0,12.8-6.4,12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4,0-12.8,6.4-12.8,12.8v70.4
C96,345.6,102.4,352,108.8,352z"
      />
    </svg>
  );
  /* eslint-enable */
};

Chart.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};

Chart.defaultProps = {
  width: '24px',
  height: '24px',
  fill: '#fff',
};

export default Chart;
