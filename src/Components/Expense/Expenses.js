import React,{useState} from 'react'
import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart';
import './Expense.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('');
  
  const getFilterdYear = (year) =>{
    setFilteredYear(year)
  }
  
  const yearFiltered = props.items.filter(ele => {
    return ele.date.getFullYear().toString() === filteredYear;
})

  return (
    <div className='expenses'>
        <ExpenseFilter getYear={getFilterdYear}/>
        <ExpenseChart expenses={yearFiltered} />
        <ExpensesList items={yearFiltered}/>
    </div>
  )
}
export default Expenses;