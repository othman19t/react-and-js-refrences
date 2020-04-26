import React from "react";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
//import Redux101 from "./redux101";
//import Destruturing from "./destructuring";
//import IncrementRedux from "./incrementRedux";
import CompineReducer from "./compineReducer";

function App() {
  const store = configureStore();

  store.dispatch(addExpense({ description: "water bill" }));
  store.dispatch(addExpense({ description: "gas bill" }));
  store.dispatch(setTextFilter("bill"));

  console.log(store.getState());
  return (
    <div className="App">
      <h1>hellow world</h1>
      <CompineReducer />
    </div>
  );
}

export default App;
