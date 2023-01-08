// state - count: 0
// action - increment, decrement, reset
// reducer
// store

const { createStore } = require("redux");

// CONSTANTS
// const INCREMENT = 'INCREMENT';
// const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';
// const DECREMENT = 'DECREMENT';
// const RESET = 'RESET';
const ADD_USER = 'ADD_USER';

const initialState = {
  users: ['remon'],
  count: 1
};

// const incrementCounterAction = () => {
//   return {
//     type: INCREMENT
//   };
// };

const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user
  };
};

// const decrementCounterAction = () => {
//   return {
//     type: DECREMENT
//   };
// };

// const resetCounterAction = () => {
//   return {
//     type: RESET
//   };
// };

// const incrementCounterByValue = (value) => {
//   return {
//     type: INCREMENT_BY_VALUE,
//     payload: value
//   };
// };

// CREATION REDUCER
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    //   case INCREMENT:

    //     return {
    //       ...state,
    //       count: state.count + 1
    //     };

    //   case DECREMENT:

    //     return {
    //       ...state,
    //       count: state.count - 1
    //     };

    //   case RESET:

    //     return {
    //       ...state,
    //       count: 0
    //     };

    case ADD_USER:

      return {
        users: [...state.users, action.payload],
        count: state.count + 1
      };

    default:
      state;
  }
};

// store
const store = createStore(userReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser('kowsar'));
store.dispatch(addUser('Mahmud'));



// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(decrementCounterAction());
// store.dispatch(resetCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterByValue(5));
// store.dispatch(incrementCounterByValue(10));









// const { createStore } = require('redux');

// // defining constants
// const INCREMENT = 'INCREMENT';
// const DECREMENT = 'DECREMENT';

// // state
// const initialCounterState = {
//   count: 0
// };

// const initialUserState = {
//   user: [
//     { name: 'Remon' }
//   ]
// };

// // action - object - type, payload
// const incrementCounter = () => {
//   return {
//     type: INCREMENT,

//   };
// };

// const decrementCounter = () => {
//   return {
//     type: DECREMENT,

//   };
// };

// // create reducer for counter
// const counterReducer = (state = initialCounterState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,
//         count: state.count + 1
//       };
//     case DECREMENT:
//       return {
//         ...state,
//         count: state.count - 1
//       };

//     default:
//       state;
//   }
// };

// // 1. state
// // 2. dispatch action
// // 3. reducer
// // 4. store - getState(), despatch(), subscribe()

// // create store
// const store = createStore(counterReducer);

// store.subscribe(() => {
//   console.log(store.getState());
// });

// // dispatch action
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(decrementCounter());