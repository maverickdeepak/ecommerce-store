import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
  };
  return (
    <>
      <div>SignIn Page</div>
      <button onClick={logGoogleUser}>sign in with google</button>
    </>
  );
};

export default SignIn;
