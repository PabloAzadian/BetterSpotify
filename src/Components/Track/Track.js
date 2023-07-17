import React from "react";

import "./Track.css";

const Track = (props) => {
  const addTrack = (event) => {
      props.onAdd(props.track);
    }

  const removeTrack = (event) => {
      props.onRemove(props.track);
    }

  const renderAction = () => {
    if (props.isRemoval) {
      return (
        <button className="Track-action" onClick={removeTrack}>
          -
        </button>
      );
    }
    return (
      <button className="Track-action" onClick={addTrack}>
        +
      </button>
    );
  };

  function durationToSeconds(duration) {
    var minutes = Math.floor(duration / 60000);
    var seconds = ((duration % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }


  return (
    
      
        <div className="Track">
            <img src={props.track.image} alt={props.track.name} />
            <div className='names'>
                <h5>{props.track.name}</h5>
                <h6>{props.track.artist}</h6>
            </div>
            <h6 className='album'>{props.track.album}</h6>
            <h6 className='duration'> {durationToSeconds(props.track.duration)}</h6>
            {renderAction()}
        </div>
    
  );
};

export default Track;
