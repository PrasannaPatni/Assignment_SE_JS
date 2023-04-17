const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const url = "mongodb://127.0.0.1:27017/post";
mongoose.connect(url).then((ans) =>{
  console.log("Connected Database")
})
const postSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  author: String,
  content: {
    type: String,
    required: [true, 'Content is required'],
  },
  publicationDate: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('post', postSchema);
module.exports = Post;
