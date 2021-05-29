import React, { useState, useEffect } from 'react';
import './App.css';
import {
  getParts,
  updatePart
} from './apiCalls';
import {PartListItem} from './part-list-item/part-list-item';


function App() {
  const [parts, setParts] = useState(undefined);
  const [pagination, setPagination] = useState(undefined);

  const fetchParts = () => {
    getParts(2).then(parts => {
      setParts(parts.data.data)
      console.log('parts', parts)
      setPagination({
        'page-number': parts.headers['page-number'],
        'per-page': parts.headers['per-page'],
        'total-entries': parts.headers['total-entries'],
        'total-pages': parts.headers['total-pages'],
      })
    })
  } 

  useEffect(() => {
    if(parts !== undefined) return;
    fetchParts();
  }, []);
  return (
    <div className="App">
      <main>
        <div className="part-list">
          {parts?.map(part => <PartListItem part={part} key={part.id}></PartListItem>)}
        </div>
      </main>
    </div>
  );
}

export default App;
