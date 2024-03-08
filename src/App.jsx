import { useState } from 'react'
import Form from './Form'
import Items from './Items'
import { nanoid } from 'nanoid'
import { ToastContainer, toast } from 'react-toastify'
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
    toast.success('Item added to list')
  }

  const removeItem = (itemId) => {
    const filteredItems = items.filter((item) => item.id !== itemId)
    setItems(filteredItems)
    setLocalStorage(filteredItems)
    toast.success('Item removed from list')
  }

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed }
        return newItem
      }
      return item
    })
    setItems(newItems)
    setLocalStorage(newItems)
  }

  return (
    <main>
      <section className="section-center">
        <Form addItem={addItem} />
        <Items items={items} removeItem={removeItem} editItem={editItem} />
        <ToastContainer position="top-center" />
      </section>
    </main>
  )
}

export default App
