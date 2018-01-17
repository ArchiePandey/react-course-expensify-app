import {createStore} from 'redux';

/*  const incrementCount = (payload = {}) => ({
    type: 'INCREMENT',
    incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
}); */

//BETTER VERSION OF incrementCount

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy //which we can write as just(shorthand): incrementBy 
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy //which we can write as just(shorthand): decrementBy 
});

const resetCount = () => ({
    type: 'RESET'  
});

const setCount = ({count}={}) => ({
    type: 'SET',
    count:count  
});


//Reducers
//properties
//1. Reducers are pure functions (op depends purely on input..we dont rely on any variable that is out of scope of reducers)
//2. Never change state or action

const countReducer =  (state = {count: 0}, action) => {
    
    switch(action.type) {
        case 'INCREMENT':
        
        return  {
            count: state.count + action.incrementBy
        };

        case 'DECREMENT' :
        return {
            count: state.count - action.decrementBy
        };

        case 'RESET': 
        return { 
            count : 0
         };

         case 'SET':
         return {
            count: action.count
         };

        default: return state;
    }
};
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

console.log(store.getState()); //return current state object

store.dispatch(incrementCount({incrementBy: 5})); //better version of below code

/* store.dispatch({                //dispatching action //calls createStore again
    type: 'INCREMENT',
    incrementBy: 5
}); */

store.dispatch(decrementCount({decrementBy: 50}));


store.dispatch(resetCount()); //better version of below code

/* store.dispatch({                //dispatching action //calls createStore again
    type: 'RESET'
}); */

store.dispatch(setCount({count: 100}));

/* store.dispatch({
    type: 'SET',
    count:101 
}); */
 


  