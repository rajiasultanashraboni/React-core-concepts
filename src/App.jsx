import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import ToDo from "./ToDo";
import Actor from "./Actor";
import Singer from "./Singer";

function App() {
  const actors = ["salman khan", "rubel", "jasim"];
  const singers = [
    { id: 1, name: "drubo", age: 35 },
    { id: 2, name: "nency", age: 25 },
    { id: 3, name: "niloy", age: 15 },
    { id: 4, name: "iliyas", age: 45 },
  ];
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>

      {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}
      <Actor name={"Bappa Raz"}></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}
      <ToDo task="learn react" isDone={true}></ToDo>
      <ToDo task="learn js" isDone={false}></ToDo>
      <ToDo task="learn jsx" isDone={true}></ToDo>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student></Student>
      <Developer></Developer>
      <Device name="laptop" price="3500"></Device>
      <Device name="mobile" price="3500"></Device>
      <Device name="watch" price="3500"></Device>
    </>
  );
}

function Device(props) {
  console.log(props);
  return (
    <h3>
      This is Device:{props.name} Price: {props.price}
    </h3>
  );
}

function Person() {
  const age = 35;
  const money = 20;
  const person = {
    name: "sakib",
    gender: "male",
  };
  return (
    <h3>
      I am a {person.name} with {age + money}
    </h3>
  );
}

function Student() {
  return (
    <div className="student">
      <h3>this is a student</h3>
      <p>Age:</p>
      <p>Name:</p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "10px",
    padding: "20px",
    border: "2px solid red",
  };
  return (
    <div style={developerStyle}>
      <h3>Devo Devo</h3>
      <p>Coding:</p>
    </div>
  );
}

export default App;
