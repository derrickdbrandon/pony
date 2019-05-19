import React from 'react';
import Audio from './Audio.jsx';
const axios = require('axios');

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [
        {
          _id: '5cd074750195920dafc3edee',
          title: 'a (instrumental)',
          url: 'https://s3.us-east-2.amazonaws.com/dotponyassets/01+a+(Instrumental).wav'
        }
      ],
      currentSong: {
        _id: '5cd074750195920dafc3edee',
        title: 'a (instrumental)',
        url: 'https://s3.us-east-2.amazonaws.com/dotponyassets/01+a+(Instrumental).wav'
      }
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/songs').then(response => response.data).then((songs) => {
      console.log(songs);
      this.setState({
        songs,
      });
    });
  }

  handleClick(e) {
    let song = e.target.getAttribute('value');

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
  };
};

export default MusicPlayer;
