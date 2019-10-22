const { controller } = require('jimpex');
const axios = require('axios');

class ApiController {
  constructor(app) {
    /**
     * The local reference to the App.
     * @type {App}
     */
    this.app = app;
  }
}

const apiController = controller((app) => {
  const router = app.get('router');
  const ctrl = new ApiController(app);
  return [
  ];
});

module.exports = {
  ApiController,
  apiController,
};
