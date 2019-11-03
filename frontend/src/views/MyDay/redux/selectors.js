import { createSelector } from 'reselect';

export const currentEventSelector = createSelector(
  state => state.events.today.get('data'),
  eventList => {
    if (!eventList) {
      return null;
    }

    return eventList.filter(event => !event.get('end_date')).last();
  }
);
