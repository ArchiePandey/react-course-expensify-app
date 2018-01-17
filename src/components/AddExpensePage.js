import React from 'react';
import ExpenseForm from './ExpenseForm';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => { //expense' object's values will be filled by this.props.onSubmit on ExpenseForm
    // props.dispatch(addExpense(expense)); //we used this before
   this.props.addExpense(expense); //we are using this now
    this.props.history.push('/'); //move me to dashboard page
 };
 render() {
    return ( 
        <div>
        <h1>Add Expense</h1>
        <ExpenseForm  
         onSubmit={this.onSubmit}
        />
    </div>
    );
 }
}



const mapDispatchToProps = (dispatch) => ( {
    addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage); 