import React from 'react';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      song: "https://s3.us-east-2.amazonaws.com/dotponyassets/expression.wav"
    };
  };

  render() {
    return (
      <div className="player">
        <audio controls>
        <source src={this.state.song} type="audio/wav"/>
        </audio>
        <p>a (instrumental)</p>
        <p>work in progress</p>
      </div>
    )
  };
};

export default MusicPlayer;
