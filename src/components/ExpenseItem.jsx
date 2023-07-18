import React from "react";
// import Ravil from './ExpenseDate'
import {ExpenseDate} from './ExpenseDate'
import './ExpenseItem.css'


const ExpenseItem = ({title, amount, date}) => {
    
    const expenseTitle = title
    const expenseAmount = amount
    return (
        <div className="expense-item">
            <h2 className="expense-item__description">{expenseTitle}</h2>
            <h1 className="expense-item__price">${expenseAmount}</h1>
            <ExpenseDate expenseDate={date} />
        </div>
    )
}

export default ExpenseItem

