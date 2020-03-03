import React from 'react';
import { useParams } from "react-router-dom";


function ColorPage({ colors }) {
  const { color } = useParams();
  const currColor = colors.filter(c => c.colorName === color)[0];
  const styles = {
    width: '400px',
    height: '300px',
    backgroundColor: currColor.colorValue
  }

  return (
    <div>
      <h1>{currColor.colorName}</h1>
      <div style={styles}>
      </div>
    </div>
  );
}

export default ColorPage;