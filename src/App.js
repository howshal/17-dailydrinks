import React, {useState} from 'react';

import './App.css';
import OrderList from "./component/OrderList";
import OrderEditor from "./component/OrderEditor";

const App = () => {
    const [editingId, setEditingId] = useState(-1);

    const toggleEditing = () => {
        setEditingId((editingId === -1) ? 0 : -1);
    };

    return (
      <div className="app">
        <header className="app-header">
          <h1>Daily Drinks</h1>
        </header>
        <main className="app-body">
            <h3>目前已點餐</h3>
            <OrderList editHandler={setEditingId}/>
        </main>
        <div className="app-footer">
            {(editingId >= 0) ? (
                <OrderEditor orderId={editingId} />
            ) : ''}
            <button type="button" className="app-footer__button" onClick={() => toggleEditing()}>{(editingId === -1) ? '+' : 'X'}</button>
        </div>
      </div>
    );
};

export default App;
