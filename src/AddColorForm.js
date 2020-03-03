import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


function AddColorForm({ addColor }) {
  const INITIAL_STATE = {
    colorName: "",
    colorValue: ""
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();

  // handles on keystroke from user
  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }))
  }
  const handleSubmit = evt => {
    evt.preventDefault();
    addColor(formData);
    setFormData(INITIAL_STATE);
    history.push('/colors');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='colorValue'></label>
        <input id='colorValue' type='color' name='colorValue' onChange={handleChange}></input>
        <label htmlFor='colorName'></label>
        <input id='colorName' name='colorName' onChange={handleChange}></input>
        <button>Add Color</button>
      </form>
    </div>
  );
}

export default AddColorForm;