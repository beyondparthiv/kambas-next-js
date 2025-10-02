
// If icons don't show, run: npm i react-icons

import { FaReact, FaAndroid, FaGithub, FaLinkedin, FaHtml5, FaCss3Alt } from "react-icons/fa";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h1 id="wd-h-1">Lab 2 - CSS & Bootstrap Demos</h1>

      {/* A.1 Selectors */}
      <section id="wd-section-selectors">
        <h2 id="wd-h-2">A.1 Selectors</h2>

        {/* ID selectors */}
        <p id="wd-p-1" className="wd-id-white-red">ID selector: white on red paragraph</p>
        <p id="wd-p-2" className="wd-id-black-yellow">ID selector: black on yellow paragraph</p>

        {/* Class selectors */}
        <h3 id="wd-h-3" className="wd-class-blue-yellow">Class selector: blue on yellow heading</h3>
        <p  id="wd-p-3" className="wd-class-blue-yellow">Class selector: blue on yellow paragraph</p>

        {/* Structure selector: style a span inside a div */}
        <div id="wd-div-1" className="wd-structure-div">
          Document structure: white on red DIV
          <span id="wd-span-1" className="wd-structure-span">small blue on yellow span</span>
        </div>
      </section>

      {/* A.2 Colors */}
      <section id="wd-section-colors">
        <h2 id="wd-h-4">A.2 Colors</h2>
        <h3 id="wd-h-5" className="wd-fg-blue-on-white">Foreground: blue on white heading</h3>
        <p  id="wd-p-4" className="wd-fg-red-on-white">Foreground: red on white text</p>
        <p  id="wd-p-5" className="wd-fg-green-on-white">Foreground: green on white text</p>
        <h3 id="wd-h-6" className="wd-bg-white-on-blue">Background: white on blue heading</h3>
        <p  id="wd-p-6" className="wd-bg-black-on-red">Background: black on red paragraph</p>
        <span id="wd-span-2" className="wd-bg-white-on-green">Background: white on green span</span>
      </section>

      {/* A.3 Borders, Margins, Padding */}
      <section id="wd-section-borders">
        <h2 id="wd-h-7">A.3 Borders, Margins, Padding</h2>
        <div id="wd-div-2" className="wd-border-fat-red">fat red border</div>
        <div id="wd-div-3" className="wd-border-thin-blue-dashed">thin blue dashed border</div>

        {/* padding variants */}
        <div id="wd-div-4" className="wd-pad-top-left">yellow bg, big padding top/left</div>
        <div id="wd-div-5" className="wd-pad-bottom">yellow bg, big padding bottom</div>
        <div id="wd-div-6" className="wd-pad-all">blue bg, big padding all around</div>

        {/* margin variants */}
        <div id="wd-div-7" className="wd-margin-bottom">yellow bg, margin bottom</div>
        <div id="wd-div-8" className="wd-centered">center using margin-left/right: auto</div>
        <div id="wd-div-9" className="wd-margin-all">big margins all around</div>
      </section>

      {/* A.4 Corners & Dimensions */}
      <section id="wd-section-corners-dimensions">
        <h2 id="wd-h-8">A.4 Corners & Dimensions</h2>
        <div id="wd-div-10" className="wd-round-top w-100">rounded top corners</div>
        <div id="wd-div-11" className="wd-round-bottom w-100">rounded bottom corners</div>
        <div id="wd-div-12" className="wd-round-all w-100">rounded all corners</div>
        <div id="wd-div-13" className="wd-round-except-tr w-100">rounded all except top-right</div>
        <div id="wd-div-14" className="wd-wide-rect">wider than tall (yellow)</div>
        <div id="wd-div-15" className="wd-tall-rect">taller than wide (blue)</div>
        <div id="wd-div-16" className="wd-square">height equals width (red)</div>
      </section>

      {/* A.5 Positioning & Z-index */}
      <section id="wd-section-positioning">
        <h2 id="wd-h-20">A.5 Positioning & Z-index</h2>

        {/* Relative: offsets without leaving normal flow */}
        <h3 id="wd-h-21">Relative</h3>
        <div id="wd-rel-yellow" className="wd-rel-box wd-yellow">Yellow, nudged down & right</div>
        <div id="wd-rel-blue"   className="wd-rel-box wd-blue-up">Blue, moved up & right</div>

        {/* Absolute: placed within a positioned parent */}
        <h3 id="wd-h-22">Absolute</h3>
        <div id="wd-abs-stage" className="wd-abs-stage">
          <div id="wd-abs-portrait"  className="wd-abs-portrait">Portrait</div>
          <div id="wd-abs-landscape" className="wd-abs-landscape">Landscape</div>
          <div id="wd-abs-square"    className="wd-abs-square">Square</div>
        </div>

        {/* Fixed: sticks to viewport while scrolling */}
        <h3 id="wd-h-23">Fixed</h3>
        <div id="wd-fixed-blue" className="wd-fixed-blue">Fixed box</div>

        {/* Z-index: landscape is above others (set in CSS) */}
        <h3 id="wd-h-24">Z-index</h3>
        <p id="wd-p-20">Blue “Landscape” has higher z-index than the other two shapes.</p>
      </section>

      {/* A.6 Floats (rectangles row + image on right) */}
      <section id="wd-section-floats-grid">
        <h2 id="wd-h-25">A.6 Floating & Grid</h2>

        {/* Three rectangles laid out horizontally via float */}
        <h3 id="wd-h-26">Floating Rectangles (horizontal)</h3>
        <div id="wd-floats" className="wd-floats">
          <div id="wd-float-a" className="wd-float-box wd-yellow">A</div>
          <div id="wd-float-b" className="wd-float-box wd-blue">B</div>
          <div id="wd-float-c" className="wd-float-box wd-red">C</div>
        </div>

        {/* Image floated to the right; text wraps around it */}
        <img
          id="wd-float-left"
          className="wd-float-left"
          src="/images/reactjs.png"
          alt="React"
          width={100}
          height={100}
        />
        <p id="wd-p-float-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        <img
          id="wd-float-right"
          className="wd-float-right"
          src="/images/reactjs.png"
          alt="React"
          width={100}
          height={100}
        />
        <p id="wd-p-float-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        <div className="wd-clear" />
      </section>

      {/* Grid layout built with simple float columns */}
      <section id="wd-section-grid">
        <h2 id="wd-h-grid">Grid Layout (floats)</h2>

        {/* 50/50 */}
        <div className="wd-grid-row">
          <div id="wd-left-half"  className="wd-grid-col-half-page wd-cell wd-left-half">Left half</div>
          <div id="wd-right-half" className="wd-grid-col-half-page wd-cell wd-right-half">Right half</div>
        </div>

        {/* 1/3 - 2/3 */}
        <div className="wd-grid-row">
          <div id="wd-left-third"       className="wd-grid-col-third-page wd-cell wd-left-third">Left third</div>
          <div id="wd-right-two-thirds" className="wd-grid-col-two-thirds-page wd-cell wd-right-two-thirds">Right two thirds</div>
        </div>

        {/* side / main / side */}
        <div className="wd-grid-row">
          <div id="wd-side-left"  className="wd-grid-col-side wd-cell wd-side">Side bar</div>
          <div id="wd-main"       className="wd-grid-col-main wd-cell wd-main">Main content</div>
          <div id="wd-side-right" className="wd-grid-col-side wd-cell wd-side-right">Side bar</div>
        </div>
      </section>

      {/* A.7 Flex: 1,2,3 in a row */}
      <section id="wd-section-flex">
        <h2 id="wd-h-29">A.7 Flex</h2>
        <div id="wd-flex-123" className="wd-flex-123">
          <div id="wd-flex-col-1" className="wd-flex-col">1</div>
          <div id="wd-flex-col-2" className="wd-flex-col">2</div>
          <div id="wd-flex-col-3" className="wd-flex-col">3</div>
        </div>
      </section>

      {/* A.8 React Icons: any six icons */}
      <section id="wd-section-icons">
        <h2 id="wd-h-30">A.8 React Icons</h2>
        <div id="wd-icons" className="wd-icons">
          <FaReact /><FaAndroid /><FaGithub /><FaLinkedin /><FaHtml5 /><FaCss3Alt />
        </div>
      </section>

      {/* B.1 Bootstrap: thin padding via container+p-2 */}
      <section id="wd-section-bs-container">
        <h2 id="wd-h-31">B.1 Bootstrap - Container padding</h2>
        <div id="wd-bs-container" className="container p-2">Thin padding around this area.</div>
      </section>

      {/* B.2 Bootstrap grids: three quick examples */}
      <section id="wd-section-bs-grids" className="mt-3">
        <h2 id="wd-h-32">B.2 Bootstrap - Grids</h2>

        {/* half/half */}
        <div className="row g-2">
          <div className="col-6"><div className="wd-bs-cell">Left half</div></div>
          <div className="col-6"><div className="wd-bs-cell">Right half</div></div>
        </div>

        {/* one/two thirds */}
        <div className="row g-2 mt-2">
          <div className="col-4"><div className="wd-bs-cell">One third</div></div>
          <div className="col-8"><div className="wd-bs-cell">Two thirds</div></div>
        </div>

        {/* side/main */}
        <div className="row g-2 mt-2">
          <div className="col-3"><div className="wd-bs-cell">Side</div></div>
          <div className="col-9"><div className="wd-bs-cell">Main</div></div>
        </div>
      </section>
    </div>
  );
}
