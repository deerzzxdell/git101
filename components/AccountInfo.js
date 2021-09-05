import React from 'react'


const AccountInfo = ({transactionList}) => {
    let newAmount = 0;
    for(let i = 0; i < transactionList.length; i++){
        newAmount = parseFloat(transactionList[i].amount)
    }
    return (
        <div>
           <p>Total: {newAmount}</p>
        </div>
    )
}

export default AccountInfo
