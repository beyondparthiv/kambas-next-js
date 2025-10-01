export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h1 id="wd-h-1">Lab 2 - CSS & Bootstrap Demos</h1>

      {/* A.1 Selectors */}
      <section id="wd-section-selectors">
        <h2 id="wd-h-2">A.1 Selectors</h2>

        {/* ID selectors */}
        <p id="wd-p-1" className="wd-id-white-red">
          ID selector: white on red paragraph
        </p>
        <p id="wd-p-2" className="wd-id-black-yellow">
          ID selector: black on yellow paragraph
        </p>

        {/* Class selectors */}
        <h3 id="wd-h-3" className="wd-class-blue-yellow">
          Class selector: blue on yellow heading
        </h3>
        <p id="wd-p-3" className="wd-class-blue-yellow">
          Class selector: blue on yellow paragraph
        </p>

        {/* Document structure selectors */}
        <div id="wd-div-1" className="wd-structure-div">
          Document structure: white on red DIV
          <span id="wd-span-1" className="wd-structure-span">
            small blue on yellow span
          </span>
        </div>
      </section>

      {/* A.2 Colors */}
      <section id="wd-section-colors">
        <h2 id="wd-h-4">A.2 Colors</h2>

        <h3 id="wd-h-5" className="wd-fg-blue-on-white">
          Foreground: blue on white heading
        </h3>
        <p id="wd-p-4" className="wd-fg-red-on-white">
          Foreground: red on white text
        </p>
        <p id="wd-p-5" className="wd-fg-green-on-white">
          Foreground: green on white text
        </p>

        <h3 id="wd-h-6" className="wd-bg-white-on-blue">
          Background: white on blue heading
        </h3>
        <p id="wd-p-6" className="wd-bg-black-on-red">
          Background: black on red paragraph
        </p>
        <span id="wd-span-2" className="wd-bg-white-on-green">
          Background: white on green span
        </span>
      </section>

      {/* A.3 Borders, Margins, Padding */}
      <section id="wd-section-borders">
        <h2 id="wd-h-7">A.3 Borders, Margins, Padding</h2>

        <div id="wd-div-2" className="wd-border-fat-red">
          fat red border
        </div>
        <div id="wd-div-3" className="wd-border-thin-blue-dashed">
          thin blue dashed border
        </div>

        <div id="wd-div-4" className="wd-pad-top-left">
          yellow bg, big padding top/left inside fat red border
        </div>
        <div id="wd-div-5" className="wd-pad-bottom">
          yellow bg, big padding bottom inside fat blue border
        </div>
        <div id="wd-div-6" className="wd-pad-all">
          blue bg, big padding all around inside fat yellow border
        </div>

        <div id="wd-div-7" className="wd-margin-bottom">
          yellow bg, margin bottom inside fat red border
        </div>
        <div id="wd-div-8" className="wd-centered">
          centered block via auto left/right margins
        </div>
        <div id="wd-div-9" className="wd-margin-all">
          big margins all around inside fat yellow border
        </div>
      </section>

      {/* A.4 Corners & Dimensions */}
      <section id="wd-section-corners-dimensions">
        <h2 id="wd-h-8">A.4 Corners & Dimensions</h2>

        <div id="wd-div-10" className="wd-round-top w-100">rounded top corners</div>
        <div id="wd-div-11" className="wd-round-bottom w-100">rounded bottom corners</div>
        <div id="wd-div-12" className="wd-round-all w-100">rounded all corners</div>
        <div id="wd-div-13" className="wd-round-except-tr w-100">
          rounded all except top-right
        </div>

        <div id="wd-div-14" className="wd-wide-rect">wider than tall (yellow)</div>
        <div id="wd-div-15" className="wd-tall-rect">taller than wide (blue)</div>
        <div id="wd-div-16" className="wd-square">height equals width (red)</div>
      </section>
    </div>
  );
}
