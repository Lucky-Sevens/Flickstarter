const models = require('../models');

exports.seed = function (knex, Promise) {
  return models.Project.forge({
    name: 'voluptates aut quis',
    short_description: 'Incidunt consequuntur repellendus nesciunt sunt impedit.',
    long_description: 'In fugiat amet et aliquid aut. Rerum adipisci dicta. Qui necessitatibus praesentium. Voluptatibus qui provident sunt. Hic illo fuga cupiditate.',
    location: 'Los Angeles, CA',
    video_url: 'https://youtu.be/YFYHZcx40es',
    photo_url: 'http://lorempixel.com/640/480/nightlife',
    goal_amount: 4000,
    goal_deadline: '11/20/2017',
    upvote_count: 87,
    raised_amount: 3600,
    creator_id: 7,
    genre: 8
  }).save()
  .then(() => {
    models.Project.forge({
      name: 'et eos vero',
      short_description: 'Incidunt consequuntur repellendus nesciunt sunt impedit.',
      long_description: 'Vero sit id qui rerum iure autem deserunt. Facilis in repellat rerum odit non sit quo. Tempore voluptatem hic molestiae dolorum. Facilis tempore voluptas sunt eum impedit.',
      location: 'San Francisco,CA',
      photo_url: 'http://lorempixel.com/640/480/cats',
      video_url: 'https://youtu.be/0roUuwYOYYI',
      goal_amount: 1000,
      goal_deadline: '10/08/2017',
      raised_amount: 500,
      creator_id: 1,
      upvote_count: 3,
      genre: 2
    }).save()
    .then(() => {
      models.Project.forge({
        name: 'sint ut aperiam',
        short_description: 'Sequi et repudiandae quaerat earum doloribus ut.',
        long_description: 'In fugiat amet et aliquid aut. Rerum adipisci dicta. Qui necessitatibus praesentium. Voluptatibus qui provident sunt. Hic illo fuga cupiditate.',
        location: 'Los Angeles, CA',
        video_url: 'https://youtu.be/M8i0ObU-_LQ',
        photo_url: 'http://lorempixel.com/640/480/business',
        goal_amount: 1500,
        goal_deadline: '10/10/2017',
        upvote_count: 6,
        raised_amount: 1000,
        creator_id: 2,
        genre: 3
      }).save()
    .then(() => {
      models.Project.forge({
        name: 'reprehenderit qui placeat',
        short_description: 'Commodi consectetur rerum aut qui ut et.',
        long_description: 'Omnis officiis culpa. Sequi possimus sit velit perferendis magnam perferendis. Expedita quia sit cumque. Quia iure quaerat omnis doloribus. Omnis laboriosam nisi.',
        location: 'Chicago, IL',
        video_url: 'https://youtu.be/YOkUjVV17sY',
        photo_url: 'http://lorempixel.com/640/480/technics',
        goal_amount: 2000,
        goal_deadline: '10/20/2017',
        upvote_count: 7,
        raised_amount: 1500,
        creator_id: 3,
        genre: 4
      }).save()
    .then(() => {
      models.Project.forge({
        name: 'molestias ut laboriosam',
        short_description: 'Nisi ut adipisci at tenetur praesentium atque delectus.',
        long_description: 'Nemo autem delectus aliquid voluptas eius. Est est voluptatem dolor.',
        location: 'New York, NY',
        video_url: 'https://youtu.be/2REkk9SCRn0',
        photo_url: 'http://lorempixel.com/640/480/people',
        goal_amount: 2500,
        goal_deadline: '10/28/2017',
        upvote_count: 2,
        raised_amount: 2300,
        creator_id: 4,
        genre: 5
      }).save()
    .then(() => {
      models.Project.forge({
        name: 'quasi officiis error',
        short_description: 'Labore sit alias modi numquam qui.',
        long_description: 'Illo tenetur consequatur molestiae atque itaque aut recusandae. Itaque quo adipisci cumque aut placeat architecto. Suscipit rem et. Suscipit ad accusamus asperiores esse. Qui asperiores ullam ut odit est assumenda nemo. Nemo aliquid qui dolorum dolor asperiores modi vel delectus et.',
        location: 'Washington, DC',
        video_url: 'https://youtu.be/T54igmon0Vw',
        photo_url: 'http://lorempixel.com/640/480/transport',
        goal_amount: 3000,
        goal_deadline: '11/01/2017',
        upvote_count: 56,
        raised_amount: 1000,
        creator_id: 5,
        genre: 6
      }).save()
    .then(() => {
      models.Project.forge({
        name: 'et doloribus dolore',
        short_description: 'Impedit deleniti sint accusamus molestias cum dolores laborum nobis.',
        long_description: 'Vero sit id qui rerum iure autem deserunt. Facilis in repellat rerum odit non sit quo. Tempore voluptatem hic molestiae dolorum. Facilis tempore voluptas sunt eum impedit.',
        location: 'San Francisco,CA',
        video_url: 'https://youtu.be/i0dp5wPvi8E',
        photo_url: 'http://lorempixel.com/640/480/abstract',
        goal_amount: 3500,
        goal_deadline: '11/10/2017',
        upvote_count: 23,
        raised_amount: 3400,
        creator_id: 6,
        genre: 7
      }).save()
    .then(() => {
      models.Project.forge({
        name: 'Parakeets: The Movie',
        short_description: 'Dive into the colorful world of Parakeets',
        long_description: 'See Parakeets like you\'ve never seen them before, in unreal 4K high definition',
        location: 'Hawaii',
        photo_url: 'http://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/getty/article/178/205/79168149.jpg',
        video_url: 'https://www.youtube.com/watch?v=TpGbx4fxogE',
        goal_amount: 10000,
        goal_deadline: '11/01/2017',
        raised_amount: 0,
        creator_id: 1,
        upvote_count: 1,
        genre: 1
      }).save();
    });
    });
    });
    });
    });
    });
  });
};
