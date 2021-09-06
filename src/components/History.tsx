import List from "./List"

type ToList ={
    id: number
    transactionName: string
    amount: string
    date: string
}
type Todo ={
    lists: {
        id: number
        transactionName: string
        amount: string
        date: string
    }[]
}

const History = ({ lists }:Todo) => {
    return (
        <>
            {lists.map((list:ToList) => (
                <List key={list.id} list={list} />
            ))}
        </>
    )
}

export default History
