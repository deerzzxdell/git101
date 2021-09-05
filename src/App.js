import React, { useState } from 'react';
import './App.css';
import AccountInfo from './components/AccountInfo';

function App() {
  const [transactionLists,setLists] = useState([
    {
      id: 1,
      transactionType: 'Deposit',
      amount: 300
    },
    {
      id: 2,
      transactionType: 'Withdraw',
      amount: 100
    },
  ])
  return (
    <div >
      <AccountInfo key = {transactionLists.id} transactionList = {transactionLists}/>
    </div>
  );
}

export default App;
