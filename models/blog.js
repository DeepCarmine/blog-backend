var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    name: String,
    email: String,
    contents: String,
    createDate: {type: Date, default: Date.now()}
});

var blogSchema = new Schema({
    name: String,
    title: String,
    contents: String,
    createDate: {type: Date, default: Date.now()},
    updateDate: {type: Date, default: Date.now()},
    count: {type:Number, default: 0},
    display: boolean,
    comments: [commentSchema]
});

module.exports = mongoose.model('blog', blogSchema);