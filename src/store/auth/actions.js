import firebase from "@/utilities/firebase";

const userRef = firebase.firestore().collection("/user");

export default {
  login(context, payload) {
    console.log(context, payload);
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(
        () => {
          context.commit("authSuccess", payload);
        },
        (err) => {
          context.commit("authFail", err);
        }
      );
  },
  async register(context, payload) {
    // register user in the game and get back the token
    const registerUserURL = `https://api.spacetraders.io/users/${payload.username}/token`;

    const response = await fetch(registerUserURL, {
      method: "POST"
      //headers: { Authorization: `Bearer ${todoistKey}` },
    });

    // create user from form
    let user = await response.json();
    console.log(user);

    // create a firebase user
    await firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        // This will return the payload to prevent then chaining
        (userCredential) => userCredential,

        (err) => {
          context.commit("authFail", err);
        }
      )
      .then((userCredential) => {
        // const userData = {
        //   firebaseId: userCredential.user.uid,
        //   // name: payload.name,
        //   username: payload.username,
        //   email: payload.email
        // };
        user = {
          ...user.user,
          token: user.token,
          firebaseId: userCredential.user.uid,
          email: payload.email
        };
        console.log(user);

        userRef
          .add(user)
          .then((docRef) => {
            console.log("User created with ID: ", docRef.id);
            context.commit("authSuccess", user);
          })
          .catch((error) => {
            console.error("Error adding User: ", error);
          });
      });
  },
  logout({ commit }) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        commit("logout");
      });
  },
  async setUser(context) {
    if (firebase.auth().currentUser) {
      const fbUser = firebase.auth().currentUser;
      console.log("setUser", fbUser);
      const snapshot = await userRef
        .where("firebaseId", "==", fbUser.uid)
        .get();
      console.log("setUser", snapshot);
      if (snapshot.empty) {
        console.log("No matching documents.");
        return;
      }

      const userData = snapshot.docs[0].data();
      context.commit("setUser", userData);
    }
  }
};
