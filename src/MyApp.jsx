import React from "react";
import AppTitle from "./AppTitle";

const generateArray = n => Array.from(new Array(n), (x,i) => i + 1);

const min = 1;
const max = 25;
const generateRandomArray = n =>
  [...new Array(n)].map(() =>  min + Math.round(Math.random() * (max - 1)));


const constArray = [2, 56, 23, 88, 17, 4];

const constArray1 = [2, 5, 8, 10];
const squareRoot = arr => arr.map(x => Math.sqrt(x).toFixed(3));

const data = [
  {
    "teacherName": "Jan Nowak",
    "teacherAge": 36,
    "active": true,
    "students": [
      {
        "name": "Maciej Janosz",
        "age": 12
      },
      {
        "name": "Wojciech Kowalski",
        "age": 15
      },
      {
        "name": "Wioletta PoznaĹska",
        "age": 1000000
      }
    ]
  },
  {
    "teacherName": "Mariusz Flasinski",
    "teacherAge": 56,
    "active": true,
    "students": [
      {
        "name": "Jan Kot",
        "age": 12
      },
      {
        "name": "Jan Ziobro",
        "age": 15
      },
      {
        "name": "Adam Malysz",
        "age": 41
      }
    ]
  },
  {
    "teacherName": "Wojciech Kuzak",
    "teacherAge": 44,
    "active": false,
    "students": [
      {
        "name": "Janina Wronska",
        "age": 22
      },
      {
        "name": "John Dover",
        "age": 7
      },
      {
        "name": "Emil Petterson",
        "age": 46
      }
    ]
  }
]

const MyApp = () => (
  <div>
    <AppTitle />
    <section> Lorem ipsum</section>
    <section> {generateArray(5).toString()} </section>
    <section> {generateRandomArray(5).toString()} </section>
    <section> {constArray.filter(x => x > 15).toString()}</section>
    <section> {squareRoot(constArray1).join(", ")}</section>
  </div>
);

export default MyApp;
