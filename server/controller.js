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
} = require('../database/dbHelpers.js');

module.exports = controller = {
  getAllUsers: (req, res) => {
    getAllUsers()
    .then(snapshot => {
      let data = [];
      snapshot.forEach(doc => data.push(doc.data()))
      res.status(200).send(data)
    })
    .catch((err) => res.status(400).send(err))
  },
  getOneUser: (req, res) => {
    let { email } = req.params;
    getOneUser(email)
    .then(snapshot => {
      let data = [];
      data.push(snapshot.data())
      res.status(200).send(data)
    })
    .catch((err) => res.status(400).send(err))
  },
  postUser: (req, res) => {
    let { email, password, firstName, lastName, profile_picture, bio, reviews } = req.body;
    postUser(email, password, firstName, lastName, profile_picture, bio, reviews)
    .then(() => res.status(201).send('Posted User!'))
    .catch((err) => res.status(401).send(err))
  },
  updateUserInfo: (req, res) => {
    let { email } = req.params;
    let { bio } = req.body;
    updateUserInfo(email, bio)
    .then(() => res.status(203).send(('Updated User!')))
    .catch(err => res.status(402).send(err))
  },
  deleteUser: (req, res) => {
    let { email } = req.params;
    deleteUser(email)
    .then(() => res.status(204).send('Deleted User!'))
    .catch(err => res.status(403).send(err))
  },
  getAllMovieReviews: (req, res) => {

  },
  postMovie: (req, res) => {

  },
  postOneMovieReview: (req, res) => {

  },
  updateUserMovieReview: (req, res) => {

  },
  deleteMovieReview: (req, res) => {

  }
}