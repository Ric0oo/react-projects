import React, { Component } from "react";
import "./Main.css";

class Main extends Component {
  state = {
    username: "",
    email: "",
    pass: "",
    accept: false,
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
    console.log("Działa");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Twoje imię: </label>
          <input
            type="text"
            id="user"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />

          <label htmlFor="email">Twój adres email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />

          <label htmlFor="password">Twoje Hasło: </label>
          <input
            type="password"
            id="password"
            name="pass"
            value={this.state.pass}
            onChange={this.handleInputChange}
          />

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

          <button type="submit">Zaloguj się</button>
        </form>
      </div>
    );
  }
}

export default Main;
