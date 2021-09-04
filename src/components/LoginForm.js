import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };

  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    if (this.state.username.isEmpty() || this.state.password.isEmpty()){
      alert('Username and Password cannot be blank.')
    } else {this.props.handleLogin()}
    
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={(event) => this.handleInputChange(event)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={(event) => this.handleInputChange(event)}/>
          </label>
        </div>
        <div>
          <button type="submit" onSubmit={(event)=>{event.preventDefault(); this.handleSubmit(event)}}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
