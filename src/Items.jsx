import SingleItem from './SingleItem'

const Items = ({ items, removeItem }) => {
  console.log(items)
  return (
    <section className="items">
      {items.map((item) => {
        return <SingleItem {...item} key={item.id} removeItem={removeItem} />
      })}
    </section>
  )
}
export default Items
