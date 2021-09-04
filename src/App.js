import { useState } from "react";
import History from "./components/History";

const App = () => {
  const [lists, setLists] = useState([
    {
      id: 1,
      text: "Deposit",
      money: 500,
      date: "6-10-2020"
    },
    {
      id: 2,
      text: "Withdraw",
      money: 150,
      date: "7-10-2020"
    },
    {
      id: 3,
      text: "Deposit",
      money: 200,
      date: "8-10-2020"
    }
  ])
  return (
    <div className="container">
      <History lists={lists} />
    </div>
  );
}

export default App;
