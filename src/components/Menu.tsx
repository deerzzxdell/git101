import React ,{MouseEventHandler} from 'react'
import Button from "./Button"

type Todo ={
    onAddDeposit: MouseEventHandler<HTMLButtonElement>
    onAddWithdraw: MouseEventHandler<HTMLButtonElement>
    showAddDeposit: boolean
    showAddWithdraw: boolean
}

const Menu = ({ onAddDeposit, showAddDeposit, onAddWithdraw, showAddWithdraw}:Todo) => {
    return (
        <div className='header'>
            <Button color={showAddDeposit ? 'green' : 'grey'} text='Deposit' onClick={onAddDeposit} />
            <Button color={showAddWithdraw ? 'green' : 'grey'} text='Withdraw' onClick={onAddWithdraw} />
        </div>
    )
}

export default Menu