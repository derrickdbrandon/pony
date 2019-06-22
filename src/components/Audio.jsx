import React from 'react';

class Audio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      src: this.props.src.url,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.title,
      src: nextProps.src.url,
    }, function rerenderAudio() {
      this.refs.audio.pause();
      this.refs.audio.load();
    });
  }

  render() {
    return (
      <div>
        <h1 className="songTitle">{this.state.title}</h1>
        <audio controls ref="audio">
          <source src={this.state.src} type="audio/wav"/>
        </audio>
      </div>
    );
  }
}

export default Audio;
