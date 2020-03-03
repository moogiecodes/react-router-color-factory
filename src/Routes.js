import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Switch, Route, Redirect } from 'react-router-dom';
import AddColorForm from './AddColorForm';
import ColorsList from './ColorsList';
import ColorPage from './ColorPage';

function Routes() {
  const [colors, setColors] = useState([]);

  const addColor = formData => {
    const newColor = { ...formData, id: uuid() };
    setColors([...colors, newColor]);
  }

  return (
    <Switch>
      <Route exact path='/colors/new'><AddColorForm addColor={addColor} /></Route>
      <Route exact path='/colors'><ColorsList colors={colors} /></Route>
      <Route exact path='/colors/:color'><ColorPage colors={colors} /></Route>
      <Redirect to='/colors' />
    </Switch>
  );
}

export default Routes;