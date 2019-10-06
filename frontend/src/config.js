import merge from './common/utils/merge';

const defaults = {};

const environments = {
  development: {
    apiUrl: '/api/',
  },
  production: {},
};

export default merge(defaults, environments[process.env.REACT_APP_ENV]);
