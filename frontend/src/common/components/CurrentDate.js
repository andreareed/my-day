import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';

const formatAlternateTimezones = timezones => {
  if (!timezones) {
    return null;
  }

  const altTimezones = timezones.map(tz => moment.tz(tz).format('h:mm A z'));

  return `(${altTimezones.join(', ')})`;
};

const CurrentDate = ({ timezones }) => {
  return (
    <div>
      <div className="current-date">
        <h1>{moment().format('dddd, MMMM Do')}</h1>
        {moment().format('h:mm A')} {formatAlternateTimezones(timezones)}
      </div>
    </div>
  );
};

CurrentDate.propTypes = {
  timezones: PropTypes.array,
};

export default CurrentDate;
