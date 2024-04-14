import { useState } from 'react';
import data from './Assets/data';
import Questions from './Questions.jsx';
import './accordion.css';

function Accordion() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <Questions questions={questions} />
    </main>
  );
}

export default Accordion;
