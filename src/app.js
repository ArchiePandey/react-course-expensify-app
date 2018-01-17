import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({description:'Water Bill', amount:300, createdAt:1200}));
store.dispatch(addExpense({description:'Gas Bill', amount:600, createdAt:1000}));
store.dispatch(addExpense({description:'Rent', amount:1200, createdAt:2000}));



const state=store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);

//console.log(store.getState());

const appRoot=document.getElementById('app');

const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
);
ReactDOM.render(jsx,appRoot);
