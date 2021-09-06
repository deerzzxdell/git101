import React from 'react'

type Todo = {
    transactionList:{
        amount: string    
    }[],
}

const AccountInfo = ({transactionList}:Todo) => {
    let newAmount = 0;
    for(let i = 0; i < transactionList.length; i++){
        newAmount += parseFloat(transactionList[i].amount)
    }
    return (
        <div>
           <p>Total: {newAmount}</p>
        </div>
    )
}

export default AccountInfo
