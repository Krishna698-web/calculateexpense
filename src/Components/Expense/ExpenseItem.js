import React from 'react'
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const date = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();
    return (
        <div className='expense_item'>
            <div className='date'>
                <div>{month}</div>
                <div>{date}</div>
                <div>{year}</div>
            </div>
            <h2>{props.title}</h2>
            <div className='price'>${props.price}</div>
        </div>
    )
}

export default ExpenseItem;