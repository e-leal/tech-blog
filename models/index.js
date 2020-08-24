const User = require('./User');
const Post = require('./Post');


User.hasMany(Post, {
    foreignKey: 'user_id'
  });
  Post.belongsTo(User, {
    foreignKey: 'user_id',
  });
//   User.belongsToMany(Post, {
//     through: Vote,
//     as: 'voted_posts',
//     foreignKey: 'user_id'
//   });

module.exports = {User, Post};