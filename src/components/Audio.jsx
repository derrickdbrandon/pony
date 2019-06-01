import React from 'react';

const Audio = ({ title, src }) => {
  const { url } = src;
  return (
    <div>
      <h1 className="songTitle">{title}</h1>
      <audio controls>
        <source src={url} type="audio/wav"/>
      </audio>
    </div>
  );
};

export default Audio;
