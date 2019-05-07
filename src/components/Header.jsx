import React from 'react';

const Header = () => {
  return (
    <div>
      <h1 className="title">DOT PONY</h1><br/>
      <div className="links">
        <a href="https://dotpony.bandcamp.com"><img className="link bandcamp" height="47px" width="47px" src="https://s3.us-east-2.amazonaws.com/dotponyassets/bandcamp.png"/></a>
        <a href="https://soundcloud.com/dotpony"><img className="link soundcloud" height="36px" width="36px" src="https://s3.us-east-2.amazonaws.com/dotponyassets/soundcloud.png"/></a>
        <a href="https://www.instagram.com/dotpony/"><img className="link instagram" height="40px" width="40px" src="https://s3.us-east-2.amazonaws.com/dotponyassets/instagram.png"/></a>
        <a href="https://twitter.com/kimchipapito"><img className="link twitter" height="30px" width="36px" src="https://s3.us-east-2.amazonaws.com/dotponyassets/twitter.png"/></a>
        <a href="https://www.nts.live/shows/dreamcast/episodes/dreamcast-5th-april-2019"><img className="link nts" height="33px" width="33px" src="https://s3.us-east-2.amazonaws.com/dotponyassets/220px-NTS_Radio_Logo_2018.png"/></a>
        <img className="link email" height="27px" width="37px" src="https://s3.us-east-2.amazonaws.com/dotponyassets/email.png"/>
      </div>
    </div>
  );
};

export default Header;
