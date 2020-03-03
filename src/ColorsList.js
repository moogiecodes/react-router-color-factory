import React from 'react';
import { Link } from "react-router-dom";


function ColorsList({ colors }) {

  return (
    <div>
      <h1>Colors:</h1>
      <ul>
        {colors.map(c =>
          <li key={c.id}><Link to={`/colors/${c.colorName}`}>{c.colorName}</Link></li>
        )}
      </ul>
    </div>
  );
}

export default ColorsList;