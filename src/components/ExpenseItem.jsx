import React from "react";
// import Ravil from './ExpenseDate'
import {ExpenseDate} from './ExpenseDate'
import './ExpenseItem.css'


const ExpenseItem = ({title, amount, date}) => {
    
    const expenseTitle = title
    const expenseAmount = amount
    return (
        <div className="expense-item">
            <ExpenseDate expenseDate={date} />
            <h2 className="expense-item__description">{expenseTitle}</h2>
            <h2 className="expense-item__price">${expenseAmount}</h2>
            
        </div>
    )
}

export default ExpenseItem

