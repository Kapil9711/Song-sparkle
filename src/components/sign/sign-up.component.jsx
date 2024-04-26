import React from "react";
import { FormWrapper, Input } from "./sign-up.component.styles";
import { loginValidator } from "../../assets/Utility/Utility.components";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      email: "",
      error: false,
      signup: null,
      clicked: false,
      redirect: false,
    };
  }
  handleSubmit = async (e) => {
    axios.defaults.withCredentials = true;

    this.setState({ error: false });
    this.setState({ clicked: true });
    this.setState({ signup: null });
    e.preventDefault();
    const checkValid = loginValidator(this.state.password);
    if (!checkValid.password) {
      this.setState({ error: true });
      return;
    }
    this.setState({ error: false });
    const url =
      "https://songs-server-nine.vercel.app/api/song-sparkle/createUser";
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
    this.setState({ clicked: false });

    if (user.status === 201) this.setState({ signup: true });
    else this.setState({ signup: false });
    this.setState({ username: "", password: "" });
    setTimeout(() => this.setState({ redirect: true }), 2000);
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <FormWrapper onSubmit={this.handleSubmit} autoComplete="off">
        <h1>Sign-Up</h1>

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
        <p style={{ fontSize: "1.3rem", color: "white" }}>
          Already have an account ,<Link to={"/Song-sparkle/"}> Log In.</Link>
        </p>
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
        {this.state.redirect ? (
          <Navigate to={"/Song-sparkle/"} replace={true} />
        ) : (
          ""
        )}
      </FormWrapper>
    );
  }
}

export default SignUp;
