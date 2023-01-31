import React, { useState } from 'react'
import './Expenseform.css';

const Expensesform = (props) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const expenses = {
            title: title,
            price: price,
            date: new Date(date)
        }
        props.expenseData(expenses);
        setTitle('');
        setPrice('');
        setDate('');
    }

    return (
        <form className='expense_form' onSubmit={onSubmitHandler}>
            <div className='inputs'>
                <div className='field'>
                    <label>Title</label>
                    <input type='text' value={title} onChange={(e) => (setTitle(e.target.value))} />
                </div>
                <div className='field'>
                    <label>Price</label>
                    <input type='number' value={price} onChange={(e) => (setPrice(e.target.value))} />
                </div>
                <div className='field'>
                    <label>Date</label>
                    <input type='date' value={date} min="2018" max="2023" onChange={(e) => (setDate(e.target.value))} />
                </div>
            </div>
            <div className='btns'>
                <button className='btn' type='button' onClick={props.onCancel}>Cancel</button>
                <button className='btn' type='submit'>Add Expenses</button>
            </div>
        </form>
    )
}

export default Expensesform;