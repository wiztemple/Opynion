module.exports = function () { 
  var faker = require("faker");
  var _ = require("lodash");
  return {
    posts: _.times(100, function (n) {
      return {
        id: n,
        slug: faker.helpers.slugify(),
        title: faker.random.words(),
        body: faker.lorem.paragraphs(),
        like: faker.random.number(),
        created_at: faker.date.past(),
        creator: faker.name.findName(),
        avatar: faker.internet.avatar(),
        comments: [
          {
            id: n,
            slug: faker.lorem.slug(),
            commentBody: faker.lorem.paragraphs(),
            created_at: faker.date.between(),
            commenter: faker.name.findName(),
            avatar: faker.internet.avatar(),
            replies: [
              {
                id: n,
                slug: faker.lorem.slug(),
                replyBody: faker.lorem.paragraphs(),
                created_at: faker.date.between(),
                replier: faker.name.findName(),
                avatar: faker.internet.avatar(),
              },
              {
                id: n,
                slug: faker.lorem.slug(),
                replyBody: faker.lorem.paragraphs(),
                created_at: faker.date.between(),
                replier: faker.name.findName(),
                avatar: faker.internet.avatar(),
              }
            ]
          },
          {
            id: n,
            slug: faker.lorem.slug(),
            commentBody: faker.lorem.paragraphs(),
            created_at: faker.date.between(),
            commenter: faker.name.findName(),
            avatar: faker.internet.avatar(),
            replies: [
              {
                id: n,
                slug: faker.lorem.slug(),
                replyBody: faker.lorem.paragraphs(),
                created_at: faker.date.between(),
                replier: faker.name.findName(),
                avatar: faker.internet.avatar(),
              },
              {
                id: n,
                slug: faker.lorem.slug(),
                replyBody: faker.lorem.paragraphs(),
                created_at: faker.date.between(),
                replier: faker.name.findName(),
                avatar: faker.internet.avatar(),
              }
            ]
          }
        ]
      }
    })
  }
}