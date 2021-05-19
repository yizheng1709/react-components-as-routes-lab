import React from 'react';
import { actors } from '../data';

const Actors = () => {
  let list = actors.map(a => {
    return(
      <div>
        {a.name}<br></br>
        <ul>
        {a.movies.map(m => <li>{m}</li>)}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {list}
    </div>
  );
};

export default Actors;
