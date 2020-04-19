import React from "react";
// to install uuid run: npm i uuid
import uuid from "uuid";
import { createStore, combineReducers } from "redux";
// add expense
// ** 6th
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expenses: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});

// remove expense
const removeexpense = ({ id } = {}, action) => ({
  type: "REMOVE_EXPENSE",
  id,
});
// edite expense
// set text filter
// sort by date
// sort by amount
// set start date
// set end date

// ** 2ed  in step 2 and 3 you get the reducer ready and then you register it in the step 4
const expensesReducerDefaultState = [];

// ** 3ed
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    // ** 8th
    case "ADD_EXPENSE":
      return [...state, action.expenses];

    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    // ** end 8th
    default:
      return state;
  }
};

// ** 2ed
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

// ** 3ed
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// ** 4th
const store = createStore(
  combineReducers({
    // register the reducer here
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);
// ** 5th
store.subscribe(() => {
  console.log(store.getState());
});

// ** 7th add expenese you can keep repeting this line and change values and see the result
const expinseOne = store.dispatch(
  addExpense({ description: "rent", amount: 100 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "coffee", amount: 300 })
);
//console.log(expenseTwo.expenses.id);

store.dispatch(removeexpense({ id: expinseOne.expenses.id }));

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
  filters: {
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
