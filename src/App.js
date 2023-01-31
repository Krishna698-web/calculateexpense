import React, { useState } from 'react';
import './App.css';
import NewExpenses from './Components/Expense Form/NewExpenses';
import Expenses from './Components/Expense/Expenses';

const Dummy_data = [
  {
    id: Math.random().toString(),
    title: 'Book',
    price: '4',
    date: new Date("2022-12-11")
  },
  {
    id: Math.random().toString(),
    title: 'pen',
    price: '1',
    date: new Date("2022-03-19")
  },
  {
    id: Math.random().toString(),
    title: 'pen',
    price: '1',
    date: new Date("2020-12-02")
  },
  {
    id: Math.random().toString(),
    title: 'specs',
    price: '20',
    date: new Date("2019-06-02")
  },
]

function App() {
  const [expenses, setExpense] = useState(Dummy_data);

  const onReceivingData = (data) => {
    setExpense(prevdata => [data, ...prevdata]);
  }

  return (
    <div className="App">
      <NewExpenses onReceive={onReceivingData} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
