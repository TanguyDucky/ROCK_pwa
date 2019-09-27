export function logIntoFirebase() {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInAnonymously()
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('logIntoFirebase', errorCode, errorMessage);
        reject({ errorCode, errorMessage });
        // ...
      });
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        resolve({ uid, isLoggedIn: !!uid });
        // ...
      } else {
        // User is signed out.
        // ...
        console.log('out');
        reject({ error: 'out' });
      }
    });
  });
}

export function getUserScores(userUUID) {
  console.log('user', userUUID);

  return new Promise((resolve, reject) => {
    db.collection('users')
      .where('uuid', '==', userUUID)
      .get()
      .then(function(querySnapshot) {
        console.log(querySnapshot);
        if (querySnapshot.empty) {
          const newUser = {
            uuid: userUUID,
            won: 0,
            draw: 0,
            lost: 0,
            total: 0,
          };

          db.collection('users')
            .add(newUser)
            .then(function(docRef) {
              console.log('Document written with ID: ', docRef.id);
              resolve({ user: newUser });
            })
            .catch(function(error) {
              console.error('Error adding document: ', error);
            });
        } else {
          resolve({ user: querySnapshot.docs[0].data() });
        }
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error);
      });
  });
}
