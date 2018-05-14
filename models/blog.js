const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// var commentSchema = new Schema({
//     name: String,
//     email: String,
//     contents: String,
//     createDate: {type: Date, default: Date.now()}
// });

// var blogSchema = new Schema({
//     name: String,
//     title: String,
//     contents: String,
//     createDate: {type: Date, default: Date.now()},
//     updateDate: {type: Date, default: Date.now()},
//     count: {type:Number, default: 0},
//     display: boolean,
//     comments: [commentSchema]
// });

const blogs = new Schema({
    name: String
});

// blogs.statics.getChatDetail = function(chatID) {
//     return this.find({
//         chatID:  chatID
//       },{
//         "chatID": 1,
//         "name": 1,
//         "text": 1,
//         "response.context": 1,
//         "response.output": 1,
//         "request.userInfo": 1,
//         "request.input_answer": 1,
//         "date": 1,
//       }).sort({date: 1}).exec();
//   }

module.exports = mongoose.model('blog', blogs);