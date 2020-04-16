import React from "react";
import { createStore } from "redux";
// ******* 1st *********** if incrementBy value none then assign it to 1
const increment = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const dicrement = ({ decrementBy = 1 } = {}) => ({
  type: "DICREMENT",
  decrementBy,
});

const reset = ({ resetValue = 0 } = {}) => ({
  type: "RESET",
  resetValue,
});

const set = ({ setValue = 10 } = {}) => ({
  type: "SET",
  setValue,
});

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
      // ******** 2ed if type is INCREMENT ADD THE incrementBy to count
      case "INCREMENT":
        return { count: state.count + action.incrementBy };
  
      case "DICREMENT":
        return { count: state.count - action.decrementBy };
  
      case "RESET":
        return { count: action.resetValue };
  
      case "SET":
        return { count: action.setValue };
  
      default:
        return state;
    }
  }
const store = createStore(countReducer);
//console.log(store.getState());
// *************  4th function that log the result and will call it when we want to see the result
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//  ********** 3ed  to call the increment function and assign incrementBy to a value or you can not assign value it will take 1 as value
store.dispatch(increment({ incrementBy: 5 }));

// to tell the action to decrement the value
store.dispatch(dicrement({ decrementBy: 10 }));

// to tell the action to reset the value to 1000 and if we want to assign the value to the default which is 0 you don't add the argument
store.dispatch(reset({ resetValue: 10000 }));

// get value of count from here and use it in the state count
store.dispatch(set({ setValue: 100 }));
// ********** 5th calling the function here in the end it should be after all the work you want to see
unsubscribe(); // you call this to say stop showing me the result on the console
const Redux101 = () => {
  return (
    <div>
      <h1>hello from redux</h1>
    </div>
  );
};

export default Redux101;
