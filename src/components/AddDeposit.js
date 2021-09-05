import { useState } from 'react'

const AddDeposit = ({ onAdd }) => {
    const [amount, setAmount] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        onAdd({ amount })

        setAmount('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>
                    Deposit Amount
                </label>
                <input type='text' placeholder='Add Amount' 
                value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>

            <input type='submit' value='Submit' className='btn btn-block' />
        </form>
    )
}

export default AddDeposit
