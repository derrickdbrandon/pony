import React from 'react';

class Audio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <h1 className="songTitle">{this.props.title}</h1>
      <audio controls>
        <source src={this.props.src.url} type="audio/wav"/>
      </audio>
      </div>
    );
  }
}

export default Audio;
