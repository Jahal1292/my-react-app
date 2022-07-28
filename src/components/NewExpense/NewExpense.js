import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

const [IsEditing, setIsEditing] = useState();

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () =>{
    setIsEditing(true);
  };

  const stopEditingHandler = () =>{
    setIsEditing(false);
  }
  return (
    <div className='new-expense'>
    {!IsEditing && (
       <button type='button' onClick={startEditingHandler}>Add Expenses</button>
       ) }
    {IsEditing && (
    <ExpenseForm 
      onSaveExpenseData={saveExpenseDataHandler} 
      onCancel={stopEditingHandler}
      />
    )}
      
    </div>
  );
};

export default NewExpense;
