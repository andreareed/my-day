import client from '../../../client';

export const actionConstants = {
  POST_EVENT: 'POST_EVENT',
};

export const postEvent = payload => ({
  type: actionConstants.POST_EVENT,
  promise: client.post('event', payload),
});
