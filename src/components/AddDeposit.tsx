import React, { useState } from 'react'

type ToAdd = {
    onAdd: Function
}

const AddDeposit = ({ onAdd }: ToAdd) => {
    const [amount, setAmount] = useState('')

    const onSubmit = (e : React.FormEvent) => {
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
