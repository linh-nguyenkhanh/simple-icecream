import React, { useState } from "react";
import "./style.css";
import { AddStyledButtons, RemoveStyledButtons } from "../Button.styled";
import { motion } from "framer-motion";

export default function IceCream() {
  //create new array with destructuring
  const [array, setArray] = useState([
    "mint",
    "vanilla",
    "strawberry",
    "chocolate",
    "cherry",
  ]);
  //add new state for index
  const [index, setIndex] = useState(0);
  //add flavour button
  function addFlavour(array) {
    setIndex(index + 1);
  }
  //remove button
  function removeFlavour(array) {
    setIndex(index - 1);
  }
  //return some JSX by using slice method, return a shallow copy of portion of an array without modified it, then map over the array and return a new array
  function getFlavours(array, index) {
    return array.slice(0, index).map((flavour, index) => {
      return (
        <motion.div
          animate={{ rotate: 180 }}
          transition={{ repeat: Infinity, duration: 2 }}
          key={index}
          className={`scoop ${flavour}`}
        >
          {flavour.index}
        </motion.div>
      );
    });
  }

  return (
    <div className="wrapper">
      <div className="container">
        <div className="cone"></div>
        <div className="oval"></div>

        <AddStyledButtons onClick={addFlavour}>
          Add icecream ball
        </AddStyledButtons>
        {getFlavours(array, index)}
        <RemoveStyledButtons onClick={removeFlavour}>
          Remove icecream ball
        </RemoveStyledButtons>
      </div>
    </div>
  );
}
