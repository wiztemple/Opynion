module.exports = function () { 
  let categories = ["Politics", "Technology", "Religion", "Programming", "Music", "Sports", "Crime", "Psychology"];
  function generateCategory() {
    return categories[Math.floor(Math.random() * categories.length)];
  }
  var faker = require("faker");
  var _ = require("lodash");
  return {
    posts: _.times(100, function (n) {
      return {
        id: n,
        title: faker.random.words(),
        slug: faker.helpers.slugify(),
        body: faker.lorem.paragraphs(15),
        like: faker.random.number(),
        created_at: faker.date.past(),
        creator: faker.name.findName(),
        avatar: faker.internet.avatar(),
        category: generateCategory(categories),
        // comments: _.times(20, function (n) {
        //   return {
        //     id: n,
        //     commentBody: faker.lorem.sentences(),
        //     created_at: faker.date.between(),
        //     commenter: faker.name.findName(),
        //     avatar: faker.internet.avatar(),
        //     replies: _.times(20, function (n) {
        //       return {
        //         id: n,
        //         body: faker.lorem.sentences(),
        //         created_at: faker.date.between(),
        //         replier: faker.name.findName(),
        //         avatar: faker.internet.avatar(),
        //       }
        //     }),
        //    }
        // }),
      }
    }),
    comments: _.times(20, function (n) {
      return {
        id: n,
        commentBody: faker.lorem.paragraphs(5),
        created_at: faker.date.between(),
        commenter: faker.name.findName(),
        avatar: faker.internet.avatar(),
      }
    }),
    replies: _.times(20, function (n) {
      return {
        id: n,
        body: faker.lorem.sentences(),
        created_at: faker.date.between(),
        replier: faker.name.findName(),
        avatar: faker.internet.avatar(),
      }
    }),
  }
}
