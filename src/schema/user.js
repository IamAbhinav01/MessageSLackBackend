import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/]
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^[a-zA-Z0-9_]+$/,
      'Username can only contain letters, numbers, and underscores'
    ]
  },
  avatar: {
    type: String
  }
});
//Arrow functions don't have their own this, so they cannot receive Mongoose's document context through this.

//Before Mongoose saves a User document to MongoDB, execute this function.
userSchema.pre('save', function saveUser(next) {
  const user = this;
  user.avatar = `https://robohash.org/${user.username}`;
  next();
});
const User = mongoose.model('User', userSchema);
module.exports = User;
