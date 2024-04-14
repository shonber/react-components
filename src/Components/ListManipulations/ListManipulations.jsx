import { useState } from 'react';
import './list-manipulations.css';
import data from './assets/data';
import List from './List';

function ListManipulations({}) {
  // States
  const [people, setPeople] = useState(data);

  return (
    <section className="container">
      <h3>{people.length} people joined today</h3>
      <List people={people} />
      <button
        type="button"
        className="btn btn-block"
        onClick={() => setPeople([])}
      >
        clear all
      </button>
    </section>
  );
}

export default ListManipulations;
