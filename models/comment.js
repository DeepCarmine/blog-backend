var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    name: String,
    email: String,
    contents: String,
    createDate: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('comment', commentSchema);