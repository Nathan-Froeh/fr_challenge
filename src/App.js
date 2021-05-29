import React, { useState, useEffect } from 'react';
import './App.css';
import {
  getParts,
  updatePart
} from './apiCalls';
import {PartListItem} from './part-list-item/part-list-item';
import {Paginate} from './paginate/paginate';

function App() {
  const [parts, setParts] = useState(undefined);
  const [pagination, setPagination] = useState(undefined);

  const fetchParts = (page) => {
    getParts(page).then(parts => {
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

  const changePage = (e) => {
    console.log('change page', e)
    fetchParts(e);
  }

  const renderParts = () => {
    if(parts && pagination) {
      return (
        <div className="part-list">
          {parts?.map(part => <PartListItem part={part} key={part.id}></PartListItem>)}
          <Paginate pageChange={changePage} pagination={pagination}></Paginate>
        </div>
      )
    }
  }

  useEffect(() => {
    if(parts !== undefined) return;
    fetchParts(1);
  }, []);
  return (
    <div className="App">
      <main>
        {renderParts()}
      </main>
    </div>
  );
}

export default App;
