import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      characters: 0
    };
  }

handleChange = (event) => {
  this.setState({
    message: event.target.value,
    characters: event.target.value.length
  },
  console.log(this.state))
}

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={(event)=> this.handleChange(event)}/>
        <p>Characters Remaining {this.props.maxChars - this.state.characters}</p>
      </div>
    );
  }
}

export default TwitterMessage;
