import React from 'react';
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <nav>
      <NavLink to='/colors/new'>Add a Color!</NavLink>
      <span>  </span>
      <NavLink to='/colors'>~COLOR HOME~</NavLink>
    </nav>
  );
}

export default Navbar;