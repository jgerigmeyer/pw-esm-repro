export default {
  webServer: {
    command: 'LEVEL=warning npm run start',
    url: 'http://localhost:3000/',
    timeout: 5 * 1000,
  },
  use: {
    baseURL: 'http://localhost:3000/',
  },
};
