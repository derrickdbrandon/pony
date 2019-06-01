import React from 'react';
import axios from 'axios';

class Shows extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shows: [],
      date: '',
      venue: '',
    };

    this.getShows = this.getShows.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addShow = this.addShow.bind(this);
    this.deleteShow = this.deleteShow.bind(this);
    this.updateShow = this.updateShow.bind(this);
  }

  componentDidMount() {
    this.getShows();
  }

  getShows() {
    axios.get('http://localhost:3000/shows').then(response => response.data).then((shows) => {
      this.setState({
        shows,
      });
    });
  }

  handleInputChange(e) {
    const { target } = e;
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  }

  addShow(e) {
    e.preventDefault();
    const { date, venue } = this.state;

    axios.post('http://localhost:3000/shows', { date, venue }).then(response => console.log(response));
    this.getShows();
  }

  deleteShow(e) {
    e.preventDefault();
    axios.delete('http://localhost:3000/shows', {});
    this.getShows();
  }

  updateShow(e) {
    e.preventDefault();
    const { date, venue } = this.state;
    axios.put('http://localhost:3000/shows', { date, venue });
    this.getShows();
  }

  render() {
    return (
      <div className="showList">
      <h1>SHOWS</h1>
      {this.state.shows.map((show) => {
        return (
          <div><p>{show.date} {show.venue}</p><br/></div>
        );
      })}
      <form>
        <label>
          date:
          <input type="text" name="date" onChange={this.handleInputChange}/>
        </label>
        <label>
          venue:
          <input type="text" name="venue" onChange={this.handleInputChange}/>
        </label>
        <button onClick={this.addShow}>add show</button>
        <button onClick={this.deleteShow}>delete show</button>
        <button onClick={this.updateShow}>update show</button>
      </form>
      </div>
    );
  }
}

export default Shows;
