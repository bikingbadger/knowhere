import firebase from "@/utilities/firebase";

const userRef = firebase.firestore().collection("/user");

export default {
  login(context, payload) {
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
        user = {
          ...user.user,
          token: user.token,
          firebaseId: userCredential.user.uid,
          email: payload.email
        };

        userRef
          .add(user)
          .then(() => {
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
      const snapshot = await userRef
        .where("firebaseId", "==", fbUser.uid)
        .get();
      if (snapshot.empty) {
        console.error("No matching documents.");
        return;
      }

      const userData = snapshot.docs[0].data();
      context.commit("setUser", userData);
    }
  },
  async takeLoan({ commit, state }) {
    // api.spacetraders.io/users/spacebadger/loans?token=72bd8573-561e-49f5-a2cf-669f4675e000?token=72bd8573-561e-49f5-a2cf-669f4675e000
    const loanURL = `https://api.spacetraders.io/users/spacebadger/loans?token=72bd8573-561e-49f5-a2cf-669f4675e000?token=${state.token}`;
    const response = await fetch(loanURL);
    const loan = await response.json();
    console.log(loan);
    commit("takeLoan", loan);
  }
};
