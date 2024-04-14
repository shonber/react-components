import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import Title from './Title';
import items from './Assets/data';
import './menu-list.css';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function MenuList() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default MenuList;
