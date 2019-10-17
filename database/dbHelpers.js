let { Users, Movies } = require('./index.js');

module.exports = dbHelpers = {
  getAllUsers: () => {
    return Users.get()
  },
  getOneUser: (email) => {
    return Users.where('email', '==', `${email}`)
  },
  postUser: (email, password, firstName, lastName, profile_picture, bio, reviews) => {
    return Users.doc(email).add({
      email, password, firstName, lastName, profile_picture, bio, reviews
    })
  },
  updateUserInfo: (email, bio) => {
    return Users.doc(email).update({bio})
  },
  deleteUser: (email) => {
    return Users.doc(email).delete()
  },

  // getReviewsForSpecificMovie: (movie) => {
  //   return Users.where('reviews', 'array-contains', ) 
  // },
  getAllMovieReviews: (movie) => {

  },
  postOneMovieReview: (email, movie, review) => {

  },
  updateUserMovieReview: () => {

  },
  deleteMovieReview: () => {

  }
}

