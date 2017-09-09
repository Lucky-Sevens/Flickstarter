const models = require('../models');

exports.seed = function (knex, Promise) {

<<<<<<< HEAD
  return models.FollowUpvote.where({ 
    project_id: 1,
    user_id: 1,
    type: 'upvote' 
=======
  return models.FollowUpvote.where({
    project_id: 1,
    user_id: 1,
    type: 'upvote'
>>>>>>> Fixes Algolia bug
  }).fetch()
    .then((followUpvote) => {
      if (followUpvote) {
        throw followUpvote;
      }
      return models.FollowUpvote.forge({
        project_id: 1,
        user_id: 1,
        type: 'upvote'
      }).save();
    })
    .error(err => {
      console.error('ERROR: failed to create followUpvote');
      throw err;
    })
    .catch(() => {
      console.log('WARNING: followUpvote already exists.');
    });

};
