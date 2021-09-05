const Header = ({ title}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'My Account',
}

export default Header
