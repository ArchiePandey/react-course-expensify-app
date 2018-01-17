import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', ()=> {
    
 const state = filterReducer(undefined,{type: '@@INIT'});  //2nd argument is the action object
 expect(state).toEqual({
     text:'',
     sortBy:'date',
     startDate:moment().startOf('month'),
     endDate:moment().endOf('month')

 });
}); 

test('should setup sortBy to amount', ()=> {
    
    const state = filterReducer(undefined,{type: 'SORT_BY_AMOUNT'});  //2nd argument is the action object
    expect(state.sortBy).toBe('amount');
    
   }); 

   test('should setup sortBy to date', ()=> {
    const currentState ={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    const state = filterReducer(currentState,{type: 'SORT_BY_DATE'});  //2nd argument is the action object
    expect(state.sortBy).toBe('date');
    
   }); 

   test('should setup text filter', ()=> {
    
    const state = filterReducer(undefined,{type: 'SET_TEXT_FILTER', text:'rent'});  //2nd argument is the action object
    expect(state.text).toBe('rent');
    
   }); 

   test('should setup start date filter', ()=> {
    const startDate=moment();
    const state = filterReducer(undefined,{type: 'SET_START_DATE',startDate});  //2nd argument is the action object
    expect(state.startDate).toEqual(startDate);
    
   }); 

   test('should setup end date filter', ()=> {
    const endDate=moment();
    const state = filterReducer(undefined,{type: 'SET_END_DATE',endDate});  //2nd argument is the action object
    expect(state.endDate).toEqual(endDate);
    
   }); 