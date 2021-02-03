import Header from './components/Header'
import Items from './components/Items'
import AddItem from './components/AddItem'
import { useState } from 'react'
import Item from './components/Item'
function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      text: 'T-Shirt',
      price: 1000,
      day: 'Feb 12th at 2:30pm',
      reminder: false,
    },
    {
      id: 2,
      text: 'Telephone',
      price: 120000,
      day: 'Jan 5th at 8:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Apples',
      price: 300,
      day: 'Feb 10th at 5:30pm',
      reminder: true,
    },

  ]

  )
  //addd item
  const addItem = (item) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newItem = { id, ...item }
    setItems([...items,newItem])

  }
  //Brisanje
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }
  const toggleReminder = (id) => {
    setItems(items.map((item) => item.id === id ? { ...item, reminder: !item.reminder } : item))

  }
  return (
    <div className='container'>
      <Header />
      <AddItem onAdd={addItem} />
      {items.length > 0 ? <Items items={items} onDelete=
        {deleteItem} onToggle={toggleReminder} /> : 'No Items To Show'}
    </div>
  );
}


export default App;
