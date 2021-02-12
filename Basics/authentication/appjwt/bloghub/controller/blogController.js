const Blog = require('../model/blogModel');
const _ = require('lodash');

exports.index =  (req, res) => {
    Blog.get( (err, blog) => {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Blog retrieved successfully",
            data: blog
        });
    });
};

exports.new =  (req, res)  => {
    let blog = new Blog();
    blog.blogname = req.body.blogname;
    blog.creator = req.body.creator;
    blog.blogmail = req.body.blogmail;
    blog.contact = req.body.contact;

    blog.save( (err) => {
        if (err)
            res.json(err);
    res.json({
            message: 'New blog created!',
            data: blog
        });
    });
};

exports.view =  (req, res) => {
    Blog.findById(req.params.blog_id,  (err, blog) => {
        if (err)
            res.send(err);
        res.json({
            message: 'blog details loading..',
            data: blog
        });
    });
};

exports.update = /*async*/ (req, res) => {
    Blog.findById(req.params.blogid,  (err, blog) => {
        if (err)
            res.send(err);
        blog.blogname = req.body.blogname;
        blog.creator = req.body.creator;
        blog.blogmail = req.body.blogmail;
        blog.contact = req.body.contact;
        blog.save( (err) => {
            if (err)
                res.json(err);
            res.json({
                message: 'blog Info updated',
                data: blog
            });
        });
    });
};

exports.delete =  (req, res) => {
    blog.remove({
        _id: req.params.profile_id
    },  (err, blog) => {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'blog deleted'
        });
    });
};