import React from "react";
import { useState } from 'react'
import Header from "./components/Header"
import Menu from "./components/Menu"
import AddDeposit from './components/AddDeposit'
import AddWithdraw from './components/AddWithdraw'

const App = () => {
  const [showAddDeposit, setShowAddDeposit] = useState(false)
  const [showAddWithdraw, setShowAddWithdraw] = useState(false)
  const date = new Date(2020, 7, 1)

  const [transactionList, setTransactionList] = useState([
    {
      id: 1,
      transactionName: 'Withdraw',
      amount: '-0',
    },
    {
      id: 2,
      transactionName: 'Deposit',
      amount: '+100',
    }
  ])

  const result = date.toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  })

  const deposit = (transaction) => {
    const id = Math.floor(Math.random() * 100000) + 1
    const newTransaction = { id, ...transaction }
    setTransactionList([...transactionList, newTransaction])
  }

  const withdraw = (transaction) => {
    const id = Math.floor(Math.random() * 100000) + 1
    const newTransaction = { id, ...transaction }
    setTransactionList([...transactionList, newTransaction])
  }

  return (
    <div className='container'>
      <Header />
      <br />
      <Menu 
        onAddDeposit={() => setShowAddDeposit(!showAddDeposit)} showAddDeposit={showAddDeposit}
        onAddWithdraw={() => setShowAddWithdraw(!showAddWithdraw)} showAddWithdraw={showAddWithdraw}
      />

      {showAddDeposit && <AddDeposit onAdd={deposit} />}
      {showAddWithdraw && <AddWithdraw onAdd={withdraw} />}

    </div>
  );
}

export default App
