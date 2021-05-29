
import React, { useState } from 'react';
import './part-list-item.css'
export function PartListItem(props) {
  const [part, setPart] = useState(props.part);

  const changeQuantity = (event) => {
    setPart(
      {
        id: part.id,
        quantity: event.target.value,
        part_file: part.part_file
      }
    );
  }

  return (
    <div className="part-list-item">
      <strong>{part.part_file.file_name}</strong>
      <div>
        <input type="number" min="0" placeholder="quantity" value={part.quantity} onChange={changeQuantity}/>
        <button>Save</button>
      </div>
    </div>

  )
}