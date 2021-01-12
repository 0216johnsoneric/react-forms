import React, { Component } from "react";
import "./style.css";


//A new input field that updates `this.state.password`. 
//Set the initial value of `this.state.password` to an empty string.
class Form extends Component {
 
  state = {
    firstName: "",
    lastName: "",
    password: ""
  };


  handleInputChange = event => {
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    //If the user hasn't provided a first and last name, throw an alert saying: "Fill out your first and last name please!".
    //If the user has provided a first and last name, but their password is less than 6 characters, throw an alert saying, "Choose a more secure password," followed by the full name. E.g. "Choose a more secure password, John Smith!"
    //Else, throw an alert to greet the user. E.g. "Hello, John Smith!".

    if (!this.state.firstName || !this.state.lastName) {
      alert(`Fill out your first and last name please!`)
      return
    }
    else if (this.state.password.length <= 6) {
      alert(`Choose a more secure password, ${this.state.firstName} ${this.state.lastName}!`)
      return
    }
    else {
      alert(`Hello ${this.state.firstName} ${this.state.lastName} ${this.state.password}`)
    }
    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.firstName} ${this.state.lastName} ${this.state.password}`);
    this.setState({
      firstName: "",
      lastName: "",
      password: ""
    });

  };

  render() {
   
    return (
      <div>
        <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p>
        <form className="form">

          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />

          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />

          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Password"
            //Do not allow the user to type in a password that is longer than 15 characters
            maxlength={10}
          />

          <button onClick={this.handleFormSubmit}>Submit</button>
          
        </form>
      </div>
    );
  }
}

export default Form;
