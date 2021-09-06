import PropTypes from 'prop-types'
import React ,{MouseEventHandler} from 'react'

type Todo ={
    color: string
    text: string
    onClick: MouseEventHandler<HTMLButtonElement>
}

const Button = ({ color, text, onClick }:Todo) => {
    return (
        <button onClick={onClick} style={{ backgroundColor: color }}className='btn'>{text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
