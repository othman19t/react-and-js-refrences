import React from "react";

/**
 * object destructuring
 */

const person = {
  name: "othman",
  age: 24,
  location: {
    city: "Vancouver",
    temp: 22,
  },
};
// if i type: name: firstName = "unknown" this means change name to firstName and if there is no value use unknown as value
const { name, age, job = "unknown" } = person; // this is equivalent to the tow following lines. note that we assign the job value to unknown if there is not value for job there will be default one
// const name = person.name;
// const age = person.age;

/**
 * the folowing is may ways of working with object to destructure data
 */
// const { name, age, job } = person;
// const { name: firstName, age, job } = person;
// const { name = "unknown", age, job: work = "unknown" } = person;
// const { city, temp } = person.location;

const { city, temp: temperature } = person.location; // here we are also changing the name of temp to temperature

console.log(`${name} is ${age} and their job is ${job}`); //returns: othman is 24 and their job is unknown
console.log(`it is ${temperature} degrees in ${city}`); // returns: it is 22 degrees in Vancouver
/**
 * end object destructuring
 */

/**
 * array destructuing
 */

const nums = [0, 1, 2, 3, 4, 5, , 7]; // note we assign a defauflt value for seven as 0 but it will not use it since we assign the value here but if we don't it will use 0

const [zero, one, two, three, four, five, six = 6, sevin= 0] = nums; // for six we assign a default value in this line and the value is 6 now as long as you don't assign the value for it in the array

console.log(`${zero} ${one} ${two} ${three} ${four} ${five} ${six} ${sevin}`); // returns: 0 1 2 3 4 5 6 7

const Destructuring = () => {
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
};
export default Destructuring;
