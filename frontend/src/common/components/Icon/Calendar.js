import React from 'react';
import PropTypes from 'prop-types';

const Calendar = ({ width, height, fill }) => {
  /* eslint-disable max-len */
  return (
    <svg width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M199,331.4l-9.4,54.6c-1.7,9.9,8.7,17.2,17.4,12.6l48.9-25.8l48.9,25.8c8.7,4.6,19.1-2.8,17.4-12.6l-9.4-54.6l39.6-38.6
c7.1-6.9,3.2-19-6.6-20.5l-54.7-8l-24.5-49.6c-4.4-8.8-17.1-9-21.5,0l-24.5,49.6l-54.7,8c-9.8,1.4-13.7,13.5-6.6,20.5L199,331.4
L199,331.4z M432,64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8,0-16,7.2-16,16v48H192V16c0-8.8-7.2-16-16-16h-32c-8.8,0-16,7.2-16,16v48
H80c-26.5,0-48,21.5-48,48v352c0,26.5,21.5,48,48,48h352c26.5,0,48-21.5,48-48V112C480,85.5,458.5,64,432,64z M432,458
c0,3.3-2.7,6-6,6H86c-3.3,0-6-2.7-6-6V160h352V458z"
      />
    </svg>
  );
  /* eslint-enable */
};

Calendar.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};

Calendar.defaultProps = {
  width: '24px',
  height: '24px',
  fill: '#fff',
};

export default Calendar;
