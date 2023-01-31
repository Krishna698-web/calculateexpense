import React from 'react'
import './ExpenseFilter.css';

const ExpenseFilter = (props) => {

    const selectionYearHandler = (e) =>{
        props.getYear(e.target.value);
    }

    return (
        <div className='expense_filter'>
            <h2>Filter by Year</h2>
            <select onChange={selectionYearHandler}>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
            </select>
        </div>
    )
}

export default ExpenseFilter