import React from 'react'
import './ExpenseDate.css';
const ExpenseDate = (props) => {
    const { datee } = props;
    const month = datee.toLocaleString('en-US', { month: 'long' });
    const day = datee.toLocaleString('en-US', { day: '2-digit' });
    const year = datee.getFullYear();
    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month} </div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    )
}

export default ExpenseDate