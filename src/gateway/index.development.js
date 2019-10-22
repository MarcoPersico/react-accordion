const useJimpex = require('projext-plugin-webpack/jimpex');
const App = require('./app');

const devApp = new App(false);
devApp.disableTLSValidation();
useJimpex(devApp, 'frontend', 'gateway');

devApp.boot();
devApp.start();
