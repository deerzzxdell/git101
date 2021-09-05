import Button from "./Button"

const Menu = ({ onAddDeposit, showAddDeposit, onAddWithdraw, showAddWithdraw}) => {
    return (
        <div className='header'>
            <Button color={showAddDeposit ? 'green' : 'grey'} text='Deposit' onClick={onAddDeposit} />
            <Button color={showAddWithdraw ? 'green' : 'grey'} text='Withdraw' onClick={onAddWithdraw} />
        </div>
    )
}

export default Menu