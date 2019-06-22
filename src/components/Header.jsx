import React from 'react';

const Header = () => {
  return (
    <div>
      <h1 className="title">DOT PONY</h1><br/>
      <div className="links">
        <a href="https://dotpony.bandcamp.com" target="_blank"><img className="link bandcamp" height="47px" width="47px" src="https://s3.us-east-2.amazonaws.com/dotponyassets/bandcamp.png"/></a>
        <a href="https://soundcloud.com/dotpony" target="_blank"><img className="link soundcloud" height="36px" width="36px" src="https://s3.us-east-2.amazonaws.com/dotponyassets/soundcloud.png"/></a>
        <a href="https://www.instagram.com/dotpony/" target="_blank"><img className="link instagram" height="40px" width="40px" src="https://s3.us-east-2.amazonaws.com/dotponyassets/instagram.png"/></a>
        <a href="https://twitter.com/kimchipapito" target="_blank"><img className="link twitter" height="30px" width="36px" src="https://s3.us-east-2.amazonaws.com/dotponyassets/twitter.png"/></a>
        <a href="https://www.nts.live/shows/dreamcast/episodes/dreamcast-5th-april-2019" target="_blank"><img className="link nts" height="33px" width="33px" src="https://s3.us-east-2.amazonaws.com/dotponyassets/220px-NTS_Radio_Logo_2018.png"/></a>
        <a href="https://ranchrecords.bigcartel.com/product/dot-pony-richard-phillip-smith-split-cass" target="_blank"><img className="link tape" height="50px" width="50px" src="https://dotponyassets.s3.us-east-2.amazonaws.com/cassette.png"/></a>
      </div>
    </div>
  );
};

export default Header;
