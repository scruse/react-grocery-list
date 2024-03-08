import { useState } from 'react'
import Form from './Form'
import Items from './Items'
import { nanoid } from 'nanoid'

const getLocalStorage = () => {
  let list = localStorage.getItem('list')

  if (list) {
    list = JSON.parse(localStorage.getItem('list'))
    console.log(list)
  } else {
    list = []
  }
  return list
}

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items))
}

const defaultList = JSON.parse(localStorage.getItem('list') || '[]')

const App = () => {
  getLocalStorage()
  const [items, setItems] = useState(defaultList)

  const addItem = (newItemName) => {
    const newItem = {
      id: nanoid(),
      name: newItemName,
      completed: false,
    }
    console.log(newItem)
    const newItems = [...items, newItem]
    setItems(newItems)
    setLocalStorage(newItems)
  }

  const removeItem = (itemId) => {
    console.log(itemId)
    const filteredItems = items.filter((item) => item.id !== itemId)
    setItems(filteredItems)
    setLocalStorage(filteredItems)
  }

  return (
    <main>
      <section className="section-center">
        <Form addItem={addItem} />
        <Items items={items} removeItem={removeItem} />
      </section>
    </main>
  )
}

export default App
