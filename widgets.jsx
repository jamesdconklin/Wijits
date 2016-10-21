import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs';
import Clock from './clock';
import Weather from './weather';

document.addEventListener('DOMContentLoaded', () =>{
  const root = document.getElementById("root");
  const tabs =
    [
      {title: "#1", content: "You soy numero uno."},
      {title: "Deux", content: "Non, c'est moi qui est le meuilleur."},
      {title: "Three", content: "WE SPEAK ANGLISH IN 'MURRICA"},
      {title: "Quattuor", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
    ];
  ReactDOM.render(
    <Weather/>, root
  );
});

// <Tabs tabs={tabs}/>, root
// <Clock />, root
