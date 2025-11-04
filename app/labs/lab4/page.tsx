"use client";

import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import ReduxExamples from "./ReduxExamples";


export default function Lab4() {
  const sayHello = () => alert("Hello");

  return (
    <Provider store={store}>
      <div className="p-3" id="wd-lab4">
        <h1>Lab 4</h1>

        

        {/* Events */}
        <ClickEvent />
        <PassingDataOnEvent />
        <PassingFunctions theFunction={sayHello} />
        <EventObject />

        {/* State examples */}
        <Counter />
        <BooleanStateVariables />
        <StringStateVariables />
        <DateStateVariable />
        <ObjectStateVariable />
        <ArrayStateVariable />
        <ParentStateComponent />

        {/* Redux example */}
        <ReduxExamples />
      </div>
    </Provider>
  );
}
