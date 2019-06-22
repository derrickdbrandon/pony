import React from 'react';
import Audio from './Audio.jsx';
const axios = require('axios');

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [
        {
          _id: '5cd083ee0195920dafc3edf0',
          title: 'wip',
          url: 'https://s3.us-east-2.amazonaws.com/dotponyassets/expression.wav',
        },
        {
          _id: '5cd074750195920dafc3edee',
          title: 'a (instrumental)',
          url: 'https://s3.us-east-2.amazonaws.com/dotponyassets/01+a+(Instrumental).wav',
        },
        {
          _id: '5cd075f30195920dafc3edef',
          title: 'last day',
          url: 'https://s3.us-east-2.amazonaws.com/dotponyassets/04+last+day.wav',
        },
        {
          _id: '5cd084160195920dafc3edf1',
          title: 'room',
          url: 'https://s3.us-east-2.amazonaws.com/dotponyassets/11+room.wav',
        },
        {
          _id: '5cd0843f0195920dafc3edf2',
          title: 'walk on by',
          url: 'https://s3.us-east-2.amazonaws.com/dotponyassets/18+walk+on+by.wav',
        },
      ],
      currentSong: {
        _id: '5cd083ee0195920dafc3edf0',
        title: 'wip',
        url: 'https://s3.us-east-2.amazonaws.com/dotponyassets/expression.wav',
      },
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/songs').then(response => response.data).then((songs) => {
      this.setState({
        songs,
      });
    });
  }

  handleClick(e) {
    const song = e.target.getAttribute('value');

    this.setState({
      currentSong: JSON.parse(song),
    });
  }

  render() {
    return (
      <div className="player">
        <Audio title={this.state.currentSong.title} src={this.state.currentSong} />
        {this.state.songs.map((song) => {
          return <p onClick={this.handleClick} className="songTitle" value={JSON.stringify(song)}>{song.title}</p>;
        })}
      </div>
    );
  }
}

export default MusicPlayer;
