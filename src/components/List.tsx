type Todo ={
    list:{
        transactionName: string
        amount: string
        date: string
    }
}
const List = ({ list }:Todo )=> {
    return (
        <div className='task'>
            <h3>{list.date} {list.transactionName}{list.amount} </h3>
        </div>
    )
}

export default List
