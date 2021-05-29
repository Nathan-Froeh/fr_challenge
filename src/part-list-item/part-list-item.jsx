
import React, { useState } from 'react';
import './part-list-item.css'
import {updatePart} from '../apiCalls';
export function PartListItem(props) {
  const [part, setPart] = useState(props.part);
  const [isUpdating, setIsUpdating] = useState(false);

  const changeQuantity = (event) => {
    setPart(
      {
        id: part.id,
        quantity: event.target.value,
        part_file: part.part_file
      }
    );
  }

  const handleUpdate = (event) => {
    event.preventDefault()
    setIsUpdating(true);
    updatePart(part).then(() => {
      setIsUpdating(false);
    }) 
  }

  return (
    <div className="part-list-item">
      <strong>{part.part_file.file_name}</strong>
      <form onSubmit={event => handleUpdate(event)}>
        <input type="number" min="0" placeholder="quantity" value={part.quantity} onChange={changeQuantity}/>
        <button type="submit" disabled={isUpdating}>Save</button>
      </form>
    </div>

  )
}