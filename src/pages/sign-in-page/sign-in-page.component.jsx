import SignIn from "../../components/sign/sign-in.component";
import { Stack } from "@mui/material";

const SignInPage = ({ handleUser }) => {
  return (
    <Stack height={"100vh"} justifyContent={"center"} alignItems={"center"}>
      <SignIn handleUser={handleUser} />
    </Stack>
  );
};

export default SignInPage;
