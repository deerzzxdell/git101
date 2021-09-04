import List from "./List"

const History = ({ lists }) => {
    return (
        <>
            {lists.map((list) => (
                <List key={list.id} list={list} />
            ))}
        </>
    )
}

export default History
