import React, { useEffect } from "react";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase";

import SignUpForm from "../../components/sign-up/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
  };
  // const logGoogleRedirectUser = async () => {
  //   const response = await signInWithGoogleRedirect();
  //   console.log(response.user);
  // };
  return (
    <>
      <div>SignIn Page</div>
      <button onClick={logGoogleUser}>sign in with google</button>
      <SignUpForm />
    </>
  );
};

export default SignIn;
