"use client";

import Link from "next/link";

import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";

import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";

import LegacyFunctions from "./LegacyFunctions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";

import TemplateLiterals from "./TemplateLiterals";

import SimpleArrays from "./SimpleArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";

import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import FindFunction from "./FindFunction";
import FilterFunction from "./FilterFunction";

import JsonStringify from "./JsonStringify";

import Spreader from "./Spreader";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import DestructingImports from "./DestructingImports";

import Classes from "./Classes";
import Styles from "./Styles";

import Add from "./Add";
import Square from "./Square";
import Highlight from "./Highlight";

import "./Classes.css";

export default function Lab3() {
  return (
    <div id="wd-lab3" className="wd-padding-10px">
      <h1>Lab 3</h1>
      <p><Link href="/labs">← Back to Labs</Link></p>

      {/* Variables, constants, types, booleans */}
      <section id="wd-variables-and-types">
        <VariablesAndConstants />
        <VariableTypes />
        <BooleanVariables />
        <hr />
      </section>

      {/* Conditionals */}
      <section id="wd-conditionals">
        <IfElse />
        <TernaryOperator />
        <ConditionalOutputIfElse />
        <ConditionalOutputInline />
        <hr />
      </section>

      {/* Functions */}
      <section id="wd-functions">
        <LegacyFunctions />
        <ArrowFunctions />
        <ImpliedReturn />
        <hr />
      </section>

      {/* Template literals */}
      <section id="wd-template-literals">
        <TemplateLiterals />
        <hr />
      </section>

      {/* Arrays */}
      <section id="wd-arrays">
        <SimpleArrays />
        <ArrayIndexAndLength />
        <AddingAndRemovingToFromArrays />
        <hr />
      </section>

      {/* Loops and HOF */}
      <section id="wd-loops-hof">
        <ForLoops />
        <MapFunction />
        <FindFunction />
        <FilterFunction />
        <hr />
      </section>

      {/* JSON */}
      <section id="wd-json">
        <JsonStringify />
        <hr />
      </section>

      {/* Spread & Destructuring */}
      <section id="wd-spread-destructuring">
        <Spreader />
        <Destructing />
        <FunctionDestructing />
        <DestructingImports />
        <hr />
      </section>

      {/* Classes & Styles */}
      <section id="wd-classes-styles">
        <Classes />
        <Styles />
        <hr />
      </section>

      {/* Small math/children demos */}
      <section id="wd-math-and-children">
        <Add a={0} b={0} />
        <h4>Square of 4</h4>
        <Square>4</Square>
        <Highlight>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Highlight>
        <hr />
      </section>

      {/*Encoding Path Parameters */}
      <section id="wd-path-parameters" className="mt-3">
      <h2>Path Parameters</h2>
      <p>Click a link to navigate to the add page with a and b encoded in the URL:</p>
      <Link id="wd-link-1-plus-2" href="/labs/lab3/add/1/2">1 + 2</Link><br />
      <Link id="wd-link-3-plus-4" href="/labs/lab3/add/3/4">3 + 4</Link>
      <hr />
      </section>


    </div>
  );
}
