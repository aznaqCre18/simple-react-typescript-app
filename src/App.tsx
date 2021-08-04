import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './components/listItem';
import AddForm from './components/addForm';

export interface ListName {
  people: {
    name: string,
    age: number,
    notes: string,
    img?: string
  }[]
}

const App = () => {
  const [listName, setListName] = useState<ListName["people"]>([
    {
      name: "John Doe",
      age: 22,
      notes: "Dia adalah teman yang baik",
      img: "https://lh3.googleusercontent.com/proxy/QwqfQdCl6z19GrIZmmLEcafI0dyrDcGGh9oT1GHCun_gXYjqKfKCwKIrvQBaxqnPp3rWcNtasSWyEV90_7WKgBVB5Dyz7fzOmxJvoCXhd-ttRsofEWxI8zCBjntALA"
    },
    {
      name: "Osvaldo Hay",
      age: 22,
      notes: "Dia adalah pemain bola",
      img: "https://cdn-2.tstatic.net/surabaya/foto/bank/images/osvaldo-haay-berusaha-menjaga-kondisi-di-tengah-libur-kompetisi-liga-1-2020.jpg"
    },
  ])
  return (
    <div className="App">
      <h2>Add Friend List</h2>
      <ListItem people={listName} />
      <AddForm people={listName} setPeople={setListName} />
    </div>
  );
}

export default App;
