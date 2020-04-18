import React from "react";
import { createStore, combineReducers } from "redux";
// add expense
// remove expense
// edite expense
// set text filter
// sort by date
// sort by amount
// set start date
// set end date

// ** 2ed
const expensesReducerDefaultState = [];

// ** 3ed
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// ** 4th

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
  })
);

// ** 5th
console.log(store.getState());

// ** 1st our demmy data
const demoState = {
  expenses: [
    {
      id: "this is the id",
      description: "this is the description",
      note: "this is the note",
      amount: 54500,
      createdAt: 0,
    },
  ],
  filter: {
    text: "this is the text",
    sortBy: "this is sort by", // date or amount
    startDate: undefined,
    endDate: undefined,
  },
};

const CompineRducer = () => (
  <div>
    <h1>hello form compine reducer</h1>
  </div>
);

export default CompineRducer;
