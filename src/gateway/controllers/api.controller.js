const { controller } = require('jimpex');
const axios = require('axios');

class ApiController {
  constructor(app) {
    /**
     * The local reference to the App.
     * @type {App}
     */
    this.app = app;
    
    this.getEvents = this.getEvents.bind(this);
  }

  getEvents(req, res) {
    axios.post(
      'http://localhost:4000/api/users/getEvents',
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
    router.post('/users/getEvents', ctrl.getEvents),
  ];
});

module.exports = {
  ApiController,
  apiController,
};
