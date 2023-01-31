import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpenseList.css';

const ExpensesList = (props) => {
    if(props.items.length === 0){
        return <h1>No Expenses found</h1>
    }

    return (
        <div className='expense_list'>
            {props.items.map(ele => (
                <ExpenseItem
                    key={ele.id}
                    title={ele.title}
                    price={ele.price}
                    date={ele.date}
                />
            ))}
        </div>
    )
}

export default ExpensesList