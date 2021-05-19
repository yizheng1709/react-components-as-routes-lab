import React from 'react';
import { directors } from '../data';

const Directors = () => {
  let list = directors.map(d => {
    return(
      <div>
        {d.name}<br></br>
        <ul>
          {d.movies.map(m => <li>{m}</li>)}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {list}
    </div>
  );
}

export default Directors
