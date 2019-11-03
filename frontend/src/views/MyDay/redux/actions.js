import moment from 'moment';
import querystring from 'querystring';
import client from '../../../client';

export const actionConstants = {
  POST_EVENT: 'POST_EVENT',
  GET_TODAYS_EVENTS: 'GET_TODAYS_EVENTS',
};

export const postEvent = payload => ({
  type: actionConstants.POST_EVENT,
  promise: client.post('events', payload),
});

export const getTodaysEvents = () => {
  const queryParams = querystring.stringify({
    start_time: moment()
      .startOf('day')
      .utc()
      .format(),
  });

  return {
    type: actionConstants.GET_TODAYS_EVENTS,
    promise: client.get(`events?${queryParams}`),
  };
};
