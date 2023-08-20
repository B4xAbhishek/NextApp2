import React, { useState, useEffect } from 'react';

// import { GoogleSignin } from '@react-native-google-signin/google-signin';
import config from '.';
// import {
//     AccessToken,
//     GraphRequest,
//     LoginManager,
//     GraphRequestManager,
// } from 'react-native-fbsdk';
import { Alert } from 'react-native'

// import { AppleButton, appleAuth } from '@invertase/react-native-apple-authentication';
import { showErrorAlert } from '../utils/info';
import { FacebookParams, GoogleParams } from '../constants/constant';
import { appleAuth, AppleButton } from '@invertase/react-native-apple-authentication';
import firebase from './firebase'
import auth from '@react-native-firebase/auth';
let user = null;


class Backend {

    constructor() {
        // GoogleSignin.configure({
        //     webClientId: config.webClientId,
        //     offlineAccess: false,
        // });
    }

    async handleFacebookLogin() {
        // const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

        // if (result.isCancelled) {
        //     throw 'User cancelled the login process';
        // }

        // // Once signed in, get the users AccesToken
        // const data = await AccessToken.getCurrentAccessToken();

        // if (!data) {
        //     throw 'Something went wrong obtaining access token';
        // }

        // // Create a Firebase credential with the AccessToken
        // const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

        // // Sign-in the user with the credential
        // return auth().signInWithCredential(facebookCredential);
    }
    async fetchAndUpdateCredentialState() {
        if (user === null) {
            return (false, 'N/A')
            //   updateCredentialStateForUser('N/A');
        } else {
            const credentialState = await appleAuth.getCredentialStateForUser(user);
            return (true, credentialState)
        }
    }
    async handleAppleLogin(cb) {
        console.warn('Beginning Apple Authentication');
        if (!appleAuth.isSupported) {

            alert('Apple Authentication is not supported on this device.')
            return
        }
        // start a login request
        try {
            const appleAuthRequestResponse = await appleAuth.performRequest({
                requestedOperation: appleAuth.Operation.LOGIN,
                requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
            });

            console.log('appleAuthRequestResponse', appleAuthRequestResponse);

            const {
                user: newUser,
                email,
                nonce,
                identityToken,
                realUserStatus /* etc */,
            } = appleAuthRequestResponse;

            user = newUser;

            const data = await this.fetchAndUpdateCredentialState()

            console.log(data);

            if (identityToken) {
                // e.g. sign in with Firebase Auth using `nonce` & `identityToken`
                console.log(nonce, identityToken);
            } else {
                // no token - failed sign-in?
            }

            if (realUserStatus === appleAuth.UserStatus.LIKELY_REAL) {
                console.log("I'm a real person!");
            }

            console.warn(`Apple Authentication Completed, ${user}, ${email}`);
        } catch (error) {
            if (error.code === appleAuth.Error.CANCELED) {
                console.warn('User canceled Apple Sign in.');
            } else {
                console.error(error);
            }
        }
    }

    // firebaseGoogleLogin = async (cb) => {
    //     try {
    //         // add any configuration settings here:
    //         await GoogleSignin.hasPlayServices();
    //         const userInfo = await GoogleSignin.signIn();
    //         const credential = firebase.auth.GoogleAuthProvider.credential(userInfo.idToken, userInfo.accessToken)
    //         const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
    //         cb(true, userInfo)
    //         console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()));
    //     } catch (error) {
    //         if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //             // user cancelled the login flow
    //             console.log("user cancelled the login flow");
    //             cb(false)
    //         } else if (error.code === statusCodes.IN_PROGRESS) {
    //             // operation (f.e. sign in) is in progress already
    //             console.log("operation (f.e. sign in) is in progress already");
    //             cb(false)
    //         } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //             // play services not available or outdated
    //             console.log("play services not available or outdated");
    //             cb(false)
    //         } else {
    //             // some other error happened
    //             console.log("some other error happened");
    //             cb(false)
    //         }
    //     }
    // }


    onAppleButtonPress = async () => {
        // Start the sign-in request
        const appleAuthRequestResponse = await appleAuth.performRequest({
            requestedOperation: appleAuth.Operation.LOGIN,
            requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
        });

        // Ensure Apple returned a user identityToken
        if (!appleAuthRequestResponse.identityToken) {
            throw 'Apple Sign-In failed - no identify token returned';
        }

        // Create a Firebase credential from the response
        const { identityToken, nonce } = appleAuthRequestResponse;
        const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);

        // Sign the user in with the credential
        return auth().signInWithCredential(appleCredential);
    }

    handleImperativeLogin(id, cb) {
        if (id == 0) {
            this.handleFacebookLogin().then(e => {
                console.log(e);
            })
        }
        else if (id == 1) {
            this.onAppleButtonPress().then(e => {
                console.log(e);
            })
        }
        else {
            // this.firebaseGoogleLogin((status, data) => {
            //     if (status) {
            //         cb(true, data)
            //     }
            //     else {
            //         cb(false)
            //     }
            // })
        }
    }
    handleLoginWithEmailAndPass(email, pass, cb) {
        auth()
            .createUserWithEmailAndPassword(email, pass)
            .then(() => {
                console.log('User account created & signed in!');
                cb(true, 'new')
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    cb(true, 'old')
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    cb(false, error)
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }
}

export default new Backend