
const List = ({ list }) => {
    return (
        <div className='task'>
            <h3>{list.transactionName}{list.amount}</h3>
        </div>
    )
}

export default List
