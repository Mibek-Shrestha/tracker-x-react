import React from 'react'
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
const ExpenseItem = (props) => {
    const { title, amount, date } = props;
    return (
        <Card className='expense-item'>
            <ExpenseDate datee={date} />

            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>Rs{amount}</div>
            </div>
        </Card>



    )

}

export default ExpenseItem