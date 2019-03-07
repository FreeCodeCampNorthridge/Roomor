import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      <nav>
        <h1>{props.branding}</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
