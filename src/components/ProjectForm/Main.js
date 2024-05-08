import React, { Component } from "react";
import "./Main.css";

class Main extends Component {
  state = {
    username: "",
    email: "",
    pass: "",
    accept: false,

    errors: {
      username: false,
      email: false,
      pass: false,
      accept: false,
    },
  };

  messages = {
    username_incorect:
      "Nazwa musi być dłuższa niż 10 znaków i nie może zawierać spacji",
    email_incorect: "Brak @ w emailu",
    password_incorect: "Hasło musi mieć 8 znaków",
    accept_incorect: "Nie potwierdzona zgoda",
  };

  handleInputChange = (event) => {
    console.log(event.target.type);
    console.log(event.target.name);

    const name = event.target.name;
    const type = event.target.type;
    if (type === "text" || type === "password" || type === "email") {
      const value = event.target.value;
      this.setState({
        [name]: value,
      });
    } else if (type === "checkbox") {
      const checked = event.target.checked;
      this.setState({
        [name]: checked,
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const validation = this.formValidation();
    console.log(validation);

    if (validation.correct) {
      this.setState({
        username: "",
        email: "",
        pass: "",
        accept: false,

        errors: {
          username: false,
          email: false,
          pass: false,
          accept: false,
        },
      });
    } else {
      this.setState({
        errors: {
          username: true,
          email: true,
          pass: true,
          accept: true,
        },
      });
      console.log("form sent");
    }

    const formValidation = () => {
      let username = false;
      let email = false;
      let password = false;
      let accept = false;
      let correct = false;

      if (
        this.state.username.length > 10 &&
        this.state.username.indexOf("" === -1)
      ) {
        username = true;
      }
      if (this.state.email.indexOf("@") !== -1) {
        email = true;
      }
      if (this.state.pass.length === 8) {
        password = true;
      }
      if (this.state.accept) {
        accept = true;
      }
      if (username && email && password && accept) {
        correct = true;
      }
      return {
        correct,
        username,
        email,
        password,
        accept,
      };
    };
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Twoje imię:
            <input
              type="text"
              id="user"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
            {this.state.errors.username && (
              <span>{this.messages.username_incorect}</span>
            )}
          </label>

          <label htmlFor="email">
            Twój adres email:
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            {this.state.errors.email && (
              <span>{this.messages.email_incorect}</span>
            )}
          </label>

          <label htmlFor="password">
            Twoje Hasło:
            <input
              type="password"
              id="password"
              name="pass"
              value={this.state.pass}
              onChange={this.handleInputChange}
            />
            {this.state.errors.pass && (
              <span>{this.messages.password_incorect}</span>
            )}
          </label>

          <label htmlFor="accept">
            <input
              type="checkbox"
              id="accept"
              name="accept"
              checked={this.state.accept}
              onChange={this.handleInputChange}
            />
            Wyrażam zgodę
          </label>
          {this.state.errors.accept && (
            <span>{this.messages.accept_incorect}</span>
          )}

          <button type="submit">Zaloguj się</button>
        </form>
      </div>
    );
  }
}

export default Main;
