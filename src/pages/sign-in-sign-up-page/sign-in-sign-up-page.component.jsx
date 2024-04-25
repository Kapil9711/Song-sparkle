import SignIn from "../../components/sign/sign-in.component";
import SignUp from "../../components/sign/sign-up.component";

import SignWrapper from "./sign-in-sign-up-page.styles.";

const SignInSignUp = () => {
  return (
    <SignWrapper>
      <SignIn />
      <SignUp />
    </SignWrapper>
  );
};

export default SignInSignUp;
