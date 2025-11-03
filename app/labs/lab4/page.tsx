"use client";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import Boolean from "./BooleanStateVariables"
import String from "./StringStateVariables"
import DateStateVariable from "./DateStateVariable"
import ObjectStateVariable from "./ObjectStateVariable"
import ArrayStateVariable from "./ArrayStateVariable"
import ParentStateComponent from "./ParentStateComponent";

export default function Lab4() {

  function sayHello() {
    alert("Hello");
  }

  return (
    <div className="p-3">
      <h1>Lab 4</h1>

      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello} />
      <EventObject />  
      <Counter />  
      <Boolean />
      <String />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent />

    </div>
  );
}
