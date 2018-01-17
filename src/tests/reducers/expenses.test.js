import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set default state', ()=> {
    const state = expensesReducer(undefined,{type: '@@INIT'});  //2nd argument is the action object
    expect(state).toEqual([]);
    
   });
   
   test('should remove expense by id', ()=> {
    const action={
        type:'REMOVE_EXPENSE',
        id:'2'
    };
    const state = expensesReducer(expenses,action);  //2nd argument is the action object
    expect(state).toEqual([expenses[0],expenses[2]]);
    
   });

   
   test('should not remove expense if id not found', ()=> {
    const action={
        type:'REMOVE_EXPENSE',
        id:'5'
    };
    const state = expensesReducer(expenses,action);  //2nd argument is the action object
    expect(state).toEqual(expenses);
    
   });

   
   test('should add expense', ()=> {
       const expense= {
        id: '4',
    description:'grocery',
    note:'',
    amount:344557,
    createdAt:0
    };
    const action={
        type:'ADD_EXPENSE',
        expense
    
    };
    const state = expensesReducer(expenses,action);  //2nd argument is the action object
    expect(state).toEqual([...expenses,expense]);
    
   });

   test('should edit expense', ()=> {
    const amount=224567
 const action={
     type:'EDIT_EXPENSE',
     id:expenses[1].id,
     updates:{
        amount
     }
 
 };
 const state = expensesReducer(expenses,action);  //2nd argument is the action object
 expect(state[1].amount).toBe(amount);
 
});


test('should edit expense', ()=> {
    const amount=224567
 const action={
     type:'EDIT_EXPENSE',
     id:'-1',
     updates:{
        amount
     }
 
 };
 const state = expensesReducer(expenses,action);  //2nd argument is the action object
 expect(state).toEqual(expenses);
 
});

   
   