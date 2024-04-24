import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/sign-in/sign-in.component";
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
