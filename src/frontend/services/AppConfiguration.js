/**
 * This is the App Configuration service that it will provide a single instance of the appConfig.
 */
const AppConfig = {
  appConfig: {},
  setConfig: (appConfig) => {
    AppConfig.appConfig = appConfig;
  },
  getConfig: () => AppConfig.appConfig,
};

module.exports = AppConfig;
