const {
  Jimpex,
  controllers,
  services,
  middlewares,
} = require('jimpex');

const appControllers = require('../controllers');

class App extends Jimpex {
  constructor(boot = true) {
    super(false, {
      configuration: {
        name: 'gateway',
        hasFolder: true,
      },
      statics: {
        folder: '../statics',
      },
    });

    this.register(services.frontend.frontendFs);
    this.register(services.html.htmlGeneratorCustom({
      deleteTemplateAfter: false,
      template: '../index.tpl.html',
      file: '../index.html',
    }));

    if (boot) {
      this.boot();
    }
  }

  boot() {
    this.register(services.api.versionValidator);
    this.register(services.api.ensureBearerAuthentication);

    this.use(middlewares.common.forceHTTPS);
    this.use(middlewares.html.fastHTMLCustom(
      'index.html',
      [/^\/api\//, /^\/service\//, /\.ico$/, /\.txt$/, /\.js$/, /\.png$/, /\.svg$/, /\.html$/]
    ));
    this.mount('/', controllers.common.rootStaticsControllerCustom([
      {
        origin: 'favicon.ico',
        output: '../favicon.ico',
      },
      {
        origin: 'index.html',
        output: '../index.html',
      },
      {
        origin: 'apple-touch-icon.png',
        output: '../apple-touch-icon.png',
      },
      {
        origin: 'favicon-16x16.png',
        output: '../favicon-16x16.png',
      },
      {
        origin: 'favicon-32x32.png',
        output: '../favicon-32x32.png',
      },
      {
        origin: 'safari-pinned-tab.svg',
        output: '../safari-pinned-tab.svg',
      },
      {
        origin: 'robots',
        output: '../robots.txt',
      },
    ]));
    this.mount('/service/health', controllers.common.healthController);
    this.mount('/service/config', controllers.common.configurationController);

    this.use(middlewares.common.errorHandler);
    this.mount('/api', appControllers.apiController);

    this.use(middlewares.html.showHTML);
  }
}

module.exports = App;
