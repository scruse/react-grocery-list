import { useState } from 'react'
const SingleItem = ({ name, id, completed, removeItem }) => {
  const [isChecked, setIsChecked] = useState(completed)

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: isChecked && 'line-through',
        }}
      >
        {name}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => removeItem(id)}
      >
        Remove
      </button>
    </div>
  )
}
export default SingleItem
