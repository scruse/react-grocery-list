import SingleItem from './SingleItem'

const Items = ({ items, removeItem, editItem }) => {
  console.log(items)
  return (
    <section className="items">
      {items.map((item) => {
        return (
          <SingleItem
            {...item}
            key={item.id}
            removeItem={removeItem}
            editItem={editItem}
          />
        )
      })}
    </section>
  )
}
export default Items
