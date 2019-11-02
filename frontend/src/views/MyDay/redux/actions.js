import querystring from 'querystring';
import client from '../../../client';

export const actionConstants = {
  POST_EVENT: 'POST_EVENT',
  GET_EVENTS: 'GET_EVENTS',
};

export const postEvent = payload => ({
  type: actionConstants.POST_EVENT,
  promise: client.post('events', payload),
});

export const fetchEvents = (params = {}) => {
  const queryParams = params ? '?' + querystring.stringify(params) : '';

  return {
    type: actionConstants.GET_EVENTS,
    promise: client.get(`events${queryParams}`),
  };
};
