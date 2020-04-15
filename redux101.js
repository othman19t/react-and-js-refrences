import React from "react";
import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      const incrementBy =
        typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return { count: state.count + incrementBy };

    case "DICREMENT":
      const decrmentby =
        typeof action.decrmentby === "number" ? action.decrmentby : 1;
      return { count: state.count - decrmentby };

    case "RESET":
      return { count: 0 };

    case "SET":
      return { count: action.count };

    default:
      return state;
  }
});
//console.log(store.getState());

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// to tell the action to increment the value
store.dispatch({
  type: "INCREMENT",
  incrementBy: 5,
});

// to tell the action to decrement the value
store.dispatch({
  type: "DICREMENT",
  decrmentby: 10,
});

// to tell the action to reset the value
store.dispatch({
  type: "RESET",
});

// get value of count from here and use it in the state count
store.dispatch({
  type: "SET",
  count: 101,
});
unsubscribe(); // you call this to say stop showing me the result on the console
const Redux101 = () => {
  return (
    <div>
      <h1>hello from redux</h1>
    </div>
  );
};

export default Redux101;