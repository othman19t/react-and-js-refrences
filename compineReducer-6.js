// we are at #95
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
// edit expense

const editExpenses = (id, update) => ({
  type: "EDIT_EXPENSES",
  id,
  update,
});
// set text filter

const setTextFilter = (text = "") => ({
  type: "SET_TEXT",
  text,
});

// sort by date

const sortByDate = () => ({ type: "SORT_BY_DATE" });
// sort by amount
const sortByAmount = () => ({ type: "SORT_BY_AMOUNT" });
// set start date
const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate,
});
// set end date
const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate,
});
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

    case "SET_TEXT":
      return state.map((filter) => {
        return { ...filter, ...action.text };
      });

    case "SET_START_DATE":
      return { ...state, startDate: action.startDate };

    case "SET_END_DATE":
      return { ...state, endDate: action.endDate };
    // ** end 8th
    default:
      return state;
  }
};

// ** 2ed
const filtersReducerDefaultState = {
  text: "",
  sortBy: "sort by",
  startDate: undefined,
  endDate: undefined,
};

// ** 3ed
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT":
      // here is how you edit data in an object
      return {
        ...state,
        text: action.text,
      };
    case "SORT_BY_DATE":
      return { sortBy: "sort it by date" };

    case "SORT_BY_AMOUNT":
      return { sortBy: "sort it by amount" };
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
store.dispatch(editExpenses(expenseTwo.expenses.id, { amount: 500 }));
store.dispatch(
  editExpenses(expenseTwo.expenses.id, { note: "hello this is to change note" })
);

store.dispatch(setTextFilter("this is the text we set it here"));
//console.log(expenseTwo.expenses.id);

store.dispatch(removeexpense({ id: expinseOne.expenses.id }));

store.dispatch(sortByDate());
store.dispatch(sortByAmount());

store.dispatch(setStartDate(100));
store.dispatch(setEndDate(200));

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
