import { useState } from 'react';
import './main.css';

function Main({ templatesMap, template }) {
  // Constants
  const Template = templatesMap[template];

  return <>{Template && <Template />}</>;
}

export default Main;
