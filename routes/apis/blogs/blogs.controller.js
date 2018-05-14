const Blog = require('./../../../models/blog');
var ObjectId = require('mongoose').Types.ObjectId; 

exports.list = (req, res, next) => {
    Blog.find(function(err, blogs){
        if(err) return res.status(500).send({error: 'database failure'});
        res.render('blogList', { title: 'Title', blogs: blogs });
    });
};

// exports.detail = (req, res, next) => {
//     const chatID = req.params.chatID;
  
//     if( !chatID ) {
//       throw new NotFoundException();
//     }
  
//     Conversations.getChatDetail(chatID)
//     .then((values) => {
//       res.json({
//         dialogs: values
//       });
//     }).catch( (err) => {
//       next(err);
//     });
//   }

exports.newBlog = (req, res, next) => {
    var blog = new Blog();
    blog.name = req.body.name;

    blog.save(function(err){
        if(err) return res.status(500).send({error: 'database failure'});
        res.json( { message: 'blog created' } );
    });
};

exports.editBlog = (req, res, next) => {
    Blog.update({ _id: new ObjectId(req.params.id) }, { $set: req.body }, function(err, output){
        if(!output.n) return res.status(404).json({ error: 'blog not found' });
        res.json( { message: 'blog updated' } );
    });
};

exports.detail = (req, res, next) => {
    Blog.findOne({_id: new ObjectId(req.params.id)}, function(err, blog){
        if(err) res.status(500).json({ error: 'database failure' });
        if(!blog) return res.status(404).json({error: 'blog not found'});
        res.json(blog);
    });
};

exports.getComments = (req, res, next) => {
    return res.json();
};

exports.newComments = (req, res, next) => {
    return res.json();
};

exports.editComments = (req, res, next) => {
    return res.json();
};

exports.deleteComments = (req, res, next) => {
    return res.json();
};