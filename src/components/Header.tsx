const Header = ({ title}:Todo) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
        </header>
    )
}

type Todo ={
    title: string
}

Header.defaultProps = {
    title: 'My Account',
}

export default Header
