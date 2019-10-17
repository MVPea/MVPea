var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mvpea-a99df.firebaseio.com"
});

let db = admin.firestore();

//doc will create that new doc in cloud firestore db
//if doc is present it will overwrite doc
//if not prssent it will create a brand new doc
let Users = db.collection('users')
// .doc('mvpeaUser4');
let Movies = db.collection('movies')
// let setMovieUser = Movies.set({
//   num_recommendations: 1,
//   who_recommended: {

//   }
// })


// let setUser = Users.set({
//   email: 'mvpuser@gmail.com2',
//   password: 'ahahah2',
//   firstName: 'MVP2',
//   lastName: 'ea2',
//   profile_picture: 'pic2',
//   bio: 'mvpea bio',
//   reviews: {
//    }
// })

// Users.get()
// .then(snapshot => {
//   snapshot.forEach(doc => {
//     console.log(doc.data());
//   });
// })
// .catch(err => console.log('err', err))
// looks like theres an async issue, get happens before the creation of mvpeaUser3
// so it grabs only one thing in db
// and then the new document is created in cloudstore db
// db.collection('users').get()
//   .then((allUsers) => {
//     allUsers.forEach((doc) => {
//       console.log(doc.id, '=>', doc.data());
//     })
//   })
//   .catch((err) => {
//     console.log('Error getting documents', err)
//   });

module.exports = { Users, Movies };