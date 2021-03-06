"use strict";

var CommentsController = require('../../../controllers').CommentsController

exports.addRoutes = function(app) {
  app.post(  '/v1/comments',            CommentsController.create)
  app.put(   '/v1/comments/:commentId', CommentsController.update)
  app.delete('/v1/comments/:commentId', CommentsController.destroy)
}
