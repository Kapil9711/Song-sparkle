import React from "react";
import { FormWrapper, Input } from "./sign-in.component.styles";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.username, this.state.password);
    this.setState({ username: "", password: "" });
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormWrapper>
          <Input className="form-control">
            <input
              id="username"
              type="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <label htmlFor="username">username</label>
          </Input>

          <Input className="form-control">
            <input
              id="password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <label htmlFor="password">password</label>
          </Input>
          <button type="submit">Sign-In</button>
        </FormWrapper>
      </form>
    );
  }
}

export default SignIn;
