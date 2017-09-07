const model = require('../../db/models');

module.exports.updateName = (req, res) => {
  model.Profile.where({id: req.user.id}).save({first: req.body.firstName, last: req.body.lastName, username: req.body.username}, {method: 'update'})
    .then((data) => {
      res.status(200).send('name has been updated');
    })
    .catch(() => {
      res.status(500);
    });
};

module.exports.roles = (req, res) => {
  model.Role.fetchAll()
    .then(results => {
      res.status(200).send(results);
    })
    .catch(() => {
      res.status(500);
    });
};