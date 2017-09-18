const models = require('../models');

exports.seed = function (knex, Promise) {
  return knex('roles').insert([
    {position: 'Actor'},
    {position: 'Cinematographer'},
    {position: 'Composer'},
    {position: 'Designer'},
    {position: 'Director'},
<<<<<<< HEAD
    {position: 'Editor'},
    {position: 'Producer'},
    {position: 'Screenwriter'}])
=======
    {position: 'Editor'};
    {position: 'Producer'},
    {position: 'Screenwriter'}]),
>>>>>>> (feat) Add open roles to projects
};