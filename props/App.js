/**
 * <First title="this is the title" /> in this code we imported First and passed the title value. the value we passed is string but we can pass any const, let, property or function.
 *<Second subTitle={myVar} /> in this code we passed myVar as a value of the subTitle props
 *  <Third> this is the props.children's value</Third> in this code we can have an option of getting access and taking advantage of the props.children. props.children allows us to pass whatever we need to pass in side the opening and closing tags
 */
import React from "react";
import First from "./components/first";
import Second from "./components/second";
import Third from "./components/third";

const myVar = "this is my subtitle";
function App() {
  return (
    <div className="App">
      <h1>App page</h1>
      <First title="this is the title" />
      <Second subTitle={myVar} />
      <Third> this is the props.children's value</Third>
    </div>
  );
}

export default App;
