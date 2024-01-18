/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#btn").addEventListener("click", function() {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = function() {
  let who = [
    "The dog",
    "My grandma",
    "His turtle",
    "My bird",
    "My brother",
    "My mother",
    "My father",
    "My aunt",
    "My uncle",
    "My cousin"
  ];
  let action = [
    "ate",
    "peed",
    "crushed",
    "broke",
    "cut",
    "destroy",
    "threw",
    "swallow",
    "burn",
    "hide"
  ];
  let what = [
    "my homework",
    "the keys",
    "the car",
    "my girlfriend",
    "my house",
    "my family",
    "my feelings",
    "my life",
    "my wallet",
    "my phone"
  ];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying",
    "yesterday",
    "last night",
    "a few weeks ago",
    "in 2002",
    "in the darkness"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};
