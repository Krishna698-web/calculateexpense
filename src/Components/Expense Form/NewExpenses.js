import React, { useState } from 'react'
import Expensesform from './Expensesform';

const NewExpenses = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const onExpenseHandler = (data) => {
        props.onReceive(data);
    }

    const startEditing = () => {
        setIsEditing(true);
    }

    const stopEditing = () => {
        setIsEditing(false);
    }

    return (
        <div className='new_expenses'>
            {!isEditing && (<button className='btn' onClick={startEditing}>Add new Expenses</button>)}
            {isEditing && (
                <Expensesform onCancel={stopEditing} expenseData={onExpenseHandler} />
            )}
        </div>
    )
}

export default NewExpenses;