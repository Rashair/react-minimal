import React from "react";
import AppTitle from "./AppTitle";

const generateArray = n => Array.from(new Array(n), (x,i) => i + 1);

const min = 1;
const max = 25;
const generateRandomArray = n =>
  [...new Array(n)].map(() =>  min + Math.round(Math.random() * (max - 1)));


const constArray = [2, 56, 23, 88, 17, 4];

const MyApp = () => (
  <div>
    <AppTitle />
    <section> Lorem ipsum</section>
    <section> {generateArray(5).toString()} </section>
    <section> {generateRandomArray(5).toString()} </section>
    <section> {constArray.filter(x => x > 15).toString()}</section>
  </div>
);

export default MyApp;
