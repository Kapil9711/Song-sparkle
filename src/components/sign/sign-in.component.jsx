import React from "react";
import { FormWrapper, Input } from "./sign-up.component.styles";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      signin: null,
      redirect: false,
      clicked: false,
    };
  }
  handleSubmit = async (e) => {
    this.setState({ clicked: true });
    this.setState({ signin: null });
    e.preventDefault();
    const { username, password } = this.state;
    const url = "https://songsserver.onrender.com/api/song-sparkle/getUser";
    const user = await axios({
      method: "POST",
      url,
      headers: {
        "content-type": "application/json",
      },
      data: {
        username,
        password,
      },
    });
    this.setState({ clicked: false });

    if (user.status === 200) {
      this.setState({ signin: true });
      this.setState({ username: "", password: "" });
    } else this.setState({ signin: false });

    if (user.status === 200) this.setState({ redirect: true });
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <FormWrapper autoComplete="off" onSubmit={this.handleSubmit}>
        <h1>Sign-In </h1>
        <Input className="form-control">
          <input
            required
            autoComplete="off"
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
        <button type="submit">Sign-In</button>
        <p style={{ fontSize: "1.3rem", color: "white" }}>
          Do not have a account ,
          <Link to={"/Song-sparkle/sign-up"}> Sign Up.</Link>
        </p>
        <p
          style={
            this.state.clicked === true
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
          Please Wait ...
        </p>
        <p
          style={
            this.state.signin === true
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
          Login Succesful
        </p>
        <p
          style={
            this.state.signin === false
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
          User not found, Try to sign-up
        </p>
        {this.state.redirect ? (
          <Navigate to={"/Song-sparkle-login/"} replace={true} />
        ) : (
          ""
        )}
      </FormWrapper>
    );
  }
}

export default SignIn;
