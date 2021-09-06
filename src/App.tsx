import React from "react";
import { useState } from 'react'
import Header from "./components/Header"
import Menu from "./components/Menu"
import AddDeposit from './components/AddDeposit'
import AddWithdraw from './components/AddWithdraw'
import History from "./components/History";
import AccountInfo from "./components/AccountInfo";

const App = () => {
  const [showAddDeposit, setShowAddDeposit] = useState(false)
  const [showAddWithdraw, setShowAddWithdraw] = useState(false)
  const [transactionList, setTransactionList] = useState([
    {
      id: 1,
      transactionName: 'Withdraw',
      amount: '-0',
      date: '9/6/2021, 2:23:50 PM'
    },
    {
      id: 2,
      transactionName: 'Deposit',
      amount: '+100',
      date: '9/6/2021, 2:40:56 PM'
    }
  ])

  type Proptype = {
    
    readonly transactionName: string,
    readonly amount: string,
    date: string  
    
  }

  const deposit = (transaction: Proptype) => {
    const id = Math.floor(Math.random() * 100000) + 1
    const newTransaction = { id, ...transaction }
    newTransaction.amount = '+' +newTransaction.amount
    newTransaction.transactionName = 'Deposit'
    newTransaction.date = new window.Date().toLocaleString()
    setTransactionList([...transactionList, newTransaction])
  }

  const withdraw = (transaction: Proptype) => {
    const id = Math.floor(Math.random() * 100000) + 1
    const newTransaction = { id, ...transaction }
    newTransaction.amount = '-' +newTransaction.amount
    newTransaction.transactionName = 'Withdraw' 
    newTransaction.date = new window.Date().toLocaleString()
    setTransactionList([...transactionList, newTransaction])
  }

  return (
    <div className='container'>
      <Header />
      <AccountInfo transactionList = {transactionList}/>
      <br />
      <Menu 
        onAddDeposit={() => setShowAddDeposit(!showAddDeposit)} showAddDeposit={showAddDeposit}
        onAddWithdraw={() => setShowAddWithdraw(!showAddWithdraw)} showAddWithdraw={showAddWithdraw}
      />
      {showAddDeposit && <AddDeposit onAdd={deposit} />}
      {showAddWithdraw && <AddWithdraw onAdd={withdraw} />}
      <History lists={transactionList} />
      
    </div>
  );
}

export default App
