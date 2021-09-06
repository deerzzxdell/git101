
const List = ({ list }) => {
    return (
        <div className='task'>
            <h3>{list.date} {list.transactionName}{list.amount} </h3>
        </div>
    )
}

export default List
