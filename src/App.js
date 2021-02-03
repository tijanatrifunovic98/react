import Header from './components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Items from './components/Items'
import AddItem from './components/AddItem'
import { useState } from 'react'
import Item from './components/Item'
import Footer from './components/Footer'
import About from './components/About'
function App() {
  const [showAddItem, setShowAddItem] = useState(false)
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

  ])
  //addd item
  const addItem = (item) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newItem = { id, ...item }
    setItems([...items, newItem])

  }
  //Brisanje
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }
  const toggleReminder = (id) => {
    setItems(items.map((item) => item.id === id ? { ...item, reminder: !item.reminder } : item))

  }
  return (
    <Router>
      <div className='container'>
        <Header onAdd={() => setShowAddItem(!showAddItem)} showAdd={showAddItem} />

        
        <Route path='/' exact render={(props) =>
        (
          <>
            {showAddItem && <AddItem onAdd={addItem} />}
            {items.length > 0 ? (<Items items={items} onDelete=
              {deleteItem} onToggle={toggleReminder} />) : ('No Items To Show')}
          </>

        )} />
      
        <Route path='/about' component={About} />

        <Footer />
      </div>
    </Router>
  );
}



export default App;
