import React, {useState, useEffect, useCallback} from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Components/Navigation';
import './main.scss';

const Home = () => {
  const [cats, setCats] = useState([]);

  // TODO: this can be done better
  fetch('http://localhost:3000/cats')
    .then(response => response.json())
    .then(data => setCats(data));

  // TODO: this can also be rendered differently
  const renderCats = () => cats.map(cat => <ul><li>{ cat.name }</li><li>{ cat.type }</li></ul>)

  return <>
    <Navigation />
    { renderCats() }
  </>
};

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);
