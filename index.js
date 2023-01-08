const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;

// constants
const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
const GET_TODOS_FAILED = 'GET_TODOS_FAILED';

const API_URL = "https://jsonplaceholder.typicode.com/todos";


// states
const initialTodosState = {
  todos: [],
  isLoading: false,
  error: null
};

// actions
const getTodosRequest = () => {
  return {
    type: GET_TODOS_REQUEST
  };
};

const getTodosFailed = (error) => {
  return {
    type: GET_TODOS_FAILED,
    payload: error,
  };
};

const getTodosSuccess = (todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todos,
  };
};

// reducers
const totosReducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:

      return {
        ...state,
        isLoading: true,
      };

    case GET_TODOS_SUCCESS:

      return {
        ...state,
        isLoading: false,
        totos: action.payload
      };

    case GET_TODOS_FAILED:

      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

// async action creator
const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodosRequest());

    // install axios: npm i axios
    axios
      .get(API_URL)
      .then((res) => {
        const todos = res.data;
        const titles = todos.map(todo => todo.title);
        dispatch(getTodosSuccess(titles));
      })
      .catch((error) => {
        const errorMessage = (error.message);
        dispatch(getTodosFailed(errorMessage));
      });

  };
};

// store
// install redux thunk: npm i redux-thunk
const store = createStore(totosReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchData());






// multiple reducer
// const { createStore, combineReducers, applyMiddleware } = require("redux");
// const { default: logger } = require("redux-logger");


// product constants
// const GET_PRODUCTS = 'GET_PRODUCTS';
// const ADD_PRODUCTS = 'ADD_PRODUCTS';

// const GET_CART_ITEMS = 'GET_CART_ITEMS';
// const ADD_CART_ITEMS = 'ADD_CART_ITEMS';

// product states
// const initialProductState = {
//   products: ['sugar', 'salt'],
//   numberOfProducts: 2
// };

// // cart states
// const initialCartState = {
//   cart: ['sugar'],
//   numberOfProducts: 1
// };

// products action
// const getProducts = () => {
//   return {
//     type: GET_PRODUCTS
//   };
// };

// const addProducts = (product) => {
//   return {
//     type: ADD_PRODUCTS,
//     payload: product
//   };
// };

// // cart action
// const getCart = () => {
//   return {
//     type: GET_CART_ITEMS
//   };
// };

// const addCart = (product) => {
//   return {
//     type: ADD_CART_ITEMS,
//     payload: product
//   };
// };

// productReducer
// const productReducer = (state = initialProductState, action) => {
//   switch (action.type) {
//     case GET_PRODUCTS:

//       return {
//         ...state
//       };

//     case ADD_PRODUCTS:

//       return {
//         products: [...state.products, action.payload],
//         numberOfProducts: state.numberOfProducts + 1
//       };

//     default:
//       return state;
//   }
// };

// // cartReducer
// const cartReducer = (state = initialCartState, action) => {
//   switch (action.type) {
//     case GET_CART_ITEMS:

//       return {
//         ...state
//       };

//     case ADD_CART_ITEMS:

//       return {
//         cart: [...state.cart, action.payload],
//         numberOfProducts: state.numberOfProducts + 1
//       };

//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   productR: productReducer,
//   cartR: cartReducer
// });

// store
// const store = createStore(rootReducer);
// const store = createStore(productReducer, applyMiddleware(logger));

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(getProducts());
// store.dispatch(addProducts('pen'));

// store.dispatch(getCart());
// store.dispatch(addCart('pen'));















// ==============================

// // state - count: 0
// // action - increment, decrement, reset
// // reducer
// // store

// const { createStore } = require("redux");

// // CONSTANTS
// // const INCREMENT = 'INCREMENT';
// // const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';
// // const DECREMENT = 'DECREMENT';
// // const RESET = 'RESET';
// const ADD_USER = 'ADD_USER';

// const initialState = {
//   users: ['remon'],
//   count: 1
// };

// // const incrementCounterAction = () => {
// //   return {
// //     type: INCREMENT
// //   };
// // };

// const addUser = (user) => {
//   return {
//     type: ADD_USER,
//     payload: user
//   };
// };

// // const decrementCounterAction = () => {
// //   return {
// //     type: DECREMENT
// //   };
// // };

// // const resetCounterAction = () => {
// //   return {
// //     type: RESET
// //   };
// // };

// // const incrementCounterByValue = (value) => {
// //   return {
// //     type: INCREMENT_BY_VALUE,
// //     payload: value
// //   };
// // };

// // CREATION REDUCER
// const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//     //   case INCREMENT:

//     //     return {
//     //       ...state,
//     //       count: state.count + 1
//     //     };

//     //   case DECREMENT:

//     //     return {
//     //       ...state,
//     //       count: state.count - 1
//     //     };

//     //   case RESET:

//     //     return {
//     //       ...state,
//     //       count: 0
//     //     };

//     case ADD_USER:

//       return {
//         users: [...state.users, action.payload],
//         count: state.count + 1
//       };

//     default:
//       state;
//   }
// };

// // store
// const store = createStore(userReducer);

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(addUser('kowsar'));
// store.dispatch(addUser('Mahmud'));



// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(decrementCounterAction());
// store.dispatch(resetCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterByValue(5));
// store.dispatch(incrementCounterByValue(10));




// =======================================


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