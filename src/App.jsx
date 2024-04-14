import { useState } from 'react';
import './App.css';
import Main from './Components/Main/Main.jsx';
import ListManipulations from './Components/ListManipulations/ListManipulations';
import TourList from './Components/TourList/TourList';
import Reviews from './Components/Reviews/Reviews';
import Accordion from './Components/Accordion/Accordion';
import MenuList from './Components/MenuList/MenuList';
import Tabs from './Components/Tabs/Tabs';
import Slider from './Components/Slider/Slider';
import LoremIpsum from './Components/LoremIpsum/LoremIpsum';
import ColorGenerator from './Components/ColorGenerator/ColorGenerator';
import GroceryBud from './Components/GroceryBud/GroceryBud';
import NavBar from './Components/NavBarContainer/NavBarContainer';
import SideBarContainer from './Components/SideBarContainer/SideBarContainer';

// Constants
const templatesMap = {
  A: ListManipulations,
  B: TourList,
  C: Reviews,
  D: Accordion,
  E: MenuList,
  F: Tabs,
  G: Slider,
  H: LoremIpsum,
  I: ColorGenerator,
  J: GroceryBud,
  K: NavBar,
  L: SideBarContainer,
  M: ColorGenerator,
  N: ColorGenerator,
};

function App() {
  // States Initialization
  const [template, setTemplate] = useState('L');

  return (
    <>
      <Main templatesMap={templatesMap} template={template}></Main>
    </>
  );
}

export default App;
