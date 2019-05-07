import React from 'react';

class Shows extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="showList">
      <h1>SHOWS</h1>
      <p>6/7/2019 Trans Pecos</p><br/>
      <p>7/7/2019 Elsewhere</p><br/>
      <p>8/12/2019 Everybody Hits</p><br/>
      <form>
        <label>
          date:
          <input type="text" name="date" />
        </label>
        <label>
          venue:
          <input type="text" name="venue" />
        </label>
        <button>add show</button>
      </form>
      </div>
    )
  }
}

export default Shows;
