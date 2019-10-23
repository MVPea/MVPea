let router = require('express').Router();
let {
  getAllUsers,
  getOneUser,
  postUser,
  updateUserInfo,
  deleteUser,
  getAllMovieReviews,
  postMovie,
  postOneMovieReview,
  updateUserMovieReview,
  deleteMovieReview
} = require('./controller.js');

router
  .route('/user')
    .get(getAllUsers)
    .post(postUser);

router
  .route('/user/:email')
    .get(getOneUser)
    .put(updateUserInfo)
    .delete(deleteUser)

router
  .route('/movie')
    .post(postMovie)

router
  .route('/movie/:movieName')
    .get(getAllMovieReviews)
    .post(postOneMovieReview)
    .put(updateUserMovieReview)
    .delete(deleteMovieReview)

module.exports = router;