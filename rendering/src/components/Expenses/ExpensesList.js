import React from 'react';

import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = props => {

    let expenseContent = <h2 className='expenses-list_fallback'>Found no extenses.</h2>;
    
    if (props.items.length > 0) {
        expenseContent = props.items.map( (expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
    }


  return (
    <ul className='expense-list'>
        {expenseContent}
    </ul>
  );
}

export default ExpenseList;