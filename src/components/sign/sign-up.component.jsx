import React from "react";
import { FormWrapper, Input } from "./sign-up.component.styles";
import { loginValidator } from "../../assets/Utility/Utility.components";
import axios from "axios";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      email: "",
      error: false,
      signup: null,
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const checkValid = loginValidator(this.state.password);
    console.log(checkValid);
    if (!checkValid.password) {
      this.setState({ error: true });
      return;
    }
    this.setState({ error: false });
    const url = "https://songsserver.onrender.com/api/song-sparkle/createUser";
    const { email, username, password } = this.state;
    const user = await axios({
      method: "POST",
      url,
      headers: {
        "content-type": "application/json",
      },
      data: {
        email,
        username,
        password,
      },
    });
    if (user.status === 201) this.setState({ signup: true });
    else this.setState({ signup: false });
    this.setState({ username: "", password: "" });
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <FormWrapper onSubmit={this.handleSubmit} autoComplete="off">
        <h1>Sign-up Form</h1>

        <Input className="form-control">
          <input
            autoComplete="off"
            required
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Email</label>
        </Input>
        <Input>
          <input
            autoComplete="off"
            required
            type="username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label htmlFor="username">username</label>
        </Input>

        <Input className="form-control">
          <input
            required
            autoComplete="off"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <label htmlFor="password">password</label>
        </Input>

        <button type="submit">Sign-Up</button>
        <p
          style={
            this.state.error
              ? {
                  display: "initial",
                  color: "red",
                  background: "white",
                  fontSize: "1.2rem",
                  padding: "4px 16px",
                }
              : { display: "none" }
          }
        >
          Password must be atleast 8 character
        </p>
        <p
          style={
            this.state.signup === true
              ? {
                  display: "initial",
                  color: "green",
                  background: "black",
                  fontSize: "1.2rem",
                  padding: "4px 16px",
                }
              : { display: "none" }
          }
        >
          Sign-up Succesful
        </p>
        <p
          style={
            this.state.signup === false
              ? {
                  display: "initial",
                  color: "yellow",
                  background: "black",
                  fontSize: "1.2rem",
                  padding: "4px 16px",
                }
              : { display: "none" }
          }
        >
          Already signed Up, try to login
        </p>
      </FormWrapper>
    );
  }
}

export default SignUp;
