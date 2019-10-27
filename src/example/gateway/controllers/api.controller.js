const { controller } = require('jimpex');
const axios = require('axios');

class ApiController {
  constructor(app) {
    /**
     * The local reference to the App.
     * @type {App}
     */
    this.app = app;
    
    this.getMockedData = this.getMockedData.bind(this);
  }

  getMockedData(req, res) {
    axios.post(
      'http://www.mocky.io/v2/5db371ca3000007c0057b65b',
      {
        data: req.body,
      }
    )
      .then((data) => {
        res.status(200).send(data.data);
      })
      .catch((error) => {
        res.status(500).json(error.message);
      });
  }
}

const apiController = controller((app) => {
  const router = app.get('router');
  const ctrl = new ApiController(app);
  return [
    router.post('/users/getMockedData', ctrl.getMockedData),
  ];
});

module.exports = {
  ApiController,
  apiController,
};
