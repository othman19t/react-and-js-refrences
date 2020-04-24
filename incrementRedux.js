import React from "react";
// the comand to install it is: npm i redux
import { createStore } from "redux";

/* 1st */
const increment = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

/* 2ed */
const countReducer = (state = { count: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return { count: state.count + action.incrementBy };
  }
};

/* 3ed */
const store = createStore(countReducer);

/* 4th */
store.dispatch(increment({ incrementBy: 5 })); // returns: 5 if you duplicate the output would be 10 

/* 5th */
console.log(store.getState());

const IncrementRedux = () => (
  <div>
    <h1>Hello form IncrementRedux</h1>
  </div>
);
export default IncrementRedux;
