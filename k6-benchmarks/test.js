import http from 'k6/http';

export const options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'constant-arrival-rate',

      // How long the test lasts
      duration: '1m',

      // How many iterations per timeUnit
      rate: 1000,

      // Start `rate` iterations per second
      timeUnit: '1s',

      // Pre-allocate VUs
      preAllocatedVUs: 20,
    },
  },
};

export default () => {
  const url = __ENV.URL
  const urlRes = http.get(url);
};