
const List = ({ list }) => {
    return (
        <div className='task'>
            <h3>{list.text} {list.text === 'Deposit' ? '+$' : '-$'}{list.money}</h3>
            <p>{list.date}</p>
        </div>
    )
}

export default List
