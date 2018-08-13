import { Alert } from "react-native";
import { Facebook } from "expo";

import { secret_facebook } from "../../secret";

function _attemptLogin(user, pass) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      user === "admin" && pass === "admin"
        ? resolve(
            JSON.stringify({
              message: "successful login",
              userName: "admin",
              name: user
            })
          )
        : reject(
            JSON.stringify({
              message: "login error"
            })
          );
    }, 500);
  });
}

async function _facebookLogIn() {
  const { type, token } = await Facebook.logInWithReadPermissionsAsync(
    secret_facebook.appId,
    {
      permissions: ["public_profile"]
    }
  );
  if (type === "success") {
    // Get the user's name using Facebook's Graph API
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}`
    );
    const json = await response.json();
    return new Promise((resolve, reject) => {
      if (typeof json !== "undefined" && typeof json.name !== "undefined") {
        Alert.alert("Logged in!", `Hi ${json.name}!`);
        resolve(json, { type, token });
      } else reject(json, { type, token });
    });
  }
  return new Promise.reject({ type, token });
}

function facebookLogIn() {
  return (dispatch, getState) => {
    if (getState().thisUser.isLoggedIn) {
      console.log("Already logged in");
      return;
    }
    dispatch({
      type: "LOGIN_IN_PROGRESS",
      data: true
    });
    return _facebookLogIn().then(
      response => {
        let { name, id } = response;
        dispatch({
          type: "LOGGED_IN",
          data: {
            name,
            facebookLoggedIn: true,
            facebookId: id,
            facebookName: name
          }
        });
        console.log("Response:", response);
      },
      err => {
        console.log("Error:", err);
      }
    );
  };
}

function logIn(user, pass) {
  return (dispatch, getState) => {
    if (getState().thisUser.isLoggedIn) {
      console.log("Already logged in");
      return;
    }
    dispatch({
      type: "LOGIN_IN_PROGRESS",
      data: true
    });
    _attemptLogin(user, pass)
      .then(
        response => {
          let json = JSON.parse(response);
          dispatch({
            type: "LOGIN_IN_PROGRESS",
            data: false
          });
          dispatch({
            type: "LOGGED_IN",
            data: json
          });
          // Do not use catch, because that will also catch
          // any errors in the dispatch and resulting render,
          // causing a loop of 'Unexpected batch number' errors.
          // https://github.com/facebook/react/issues/6895
        },
        error => {
          let json = JSON.parse(error);
          dispatch({
            type: "LOGIN_IN_PROGRESS",
            data: false
          });
          console.log("A login error occured.", error);
          Alert.alert(error);
        }
      )
      .catch(error => {
        console.log("another error occured", error);
        Alert.alert(error);
      });
  };
}

function skipLogIn() {
  return {
    type: "SKIPPED_LOGIN"
  };
}

function _logOut() {
  // TODO: logout of server
  return;
}

function logOut() {
  return dispatch => {
    _logout();
    return dispatch({
      type: "LOGGED_OUT"
    });
  };
}

function setSharing(data) {
  return dispatch => {
    type: "SET_SHARING", data;
  };
}

module.exports = { facebookLogIn, logIn, logOut, skipLogIn, setSharing };
