import { FaReact, FaAndroid, FaGithub, FaLinkedin, FaHtml5, FaCss3Alt } from "react-icons/fa";



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


    {/* ------- A.5 Positioning & Z-index -------- */}
      <section id="wd-section-positioning">
        <h2 id="wd-h-20">A.5 Positioning &amp; Z-index</h2>

        {/* Relative */}
        <h3 id="wd-h-21">Relative</h3>
        <div id="wd-rel-yellow" className="wd-rel-box wd-yellow">Yellow, nudged down and right</div>
        <div id="wd-rel-blue" className="wd-rel-box wd-blue-up">Blue, moved up and right</div>

        {/* Absolute */}
        <h3 id="wd-h-22">Absolute</h3>
        <div id="wd-abs-stage" className="wd-abs-stage">
          <div id="wd-abs-portrait" className="wd-abs-portrait">Portrait</div>
          <div id="wd-abs-landscape" className="wd-abs-landscape">Landscape</div>
          <div id="wd-abs-square" className="wd-abs-square">Square</div>
        </div>

        {/* Fixed */}
        <h3 id="wd-h-23">Fixed</h3>
        <div id="wd-fixed-blue" className="wd-fixed-blue">Fixed: I do not scroll</div>

        {/* Z-index */}
        <h3 id="wd-h-24">Z-Index</h3>
        <p id="wd-p-20">
          In the absolute stage above, the blue <strong>Landscape</strong> has a higher z-index, so it renders above Portrait and Square.
        </p>
      </section>

      {/* ------- A.6 Floating & Grid -------- */}
      <section id="wd-section-floats-grid">
        <h2 id="wd-h-25">A.6 Floating &amp; Grid</h2>

        {/* Floating rectangles horizontally */}
        <h3 id="wd-h-26">Floating Rectangles (horizontal)</h3>
        <div id="wd-floats" className="wd-floats">
          <div id="wd-float-a" className="wd-float-box wd-yellow">A</div>
          <div id="wd-float-b" className="wd-float-box wd-blue">B</div>
          <div id="wd-float-c" className="wd-float-box wd-red">C</div>
        </div>

        <div id="wd-float-right-wrap" className="wd-float-right-wrap">
        <img
          id="wd-float-img"
          className="wd-float-right-img"
          src="https://placehold.co/140x90?text=Image"
          alt="Image"
          width={140}
          height={90}
        />
        <p id="wd-p-21">
          This paragraph wraps around the floated image. Add a couple of lines so the
          wrapping is obvious. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Integer non nisi at lectus sagittis dictum.
        </p>
        <div className="wd-clear" />
        </div>


        {/* CSS Grid sample */}
        <h3 id="wd-h-28">Grid layout</h3>
        <div id="wd-grid" className="wd-grid">
          <div id="wd-grid-1" className="wd-grid-cell">1</div>
          <div id="wd-grid-2" className="wd-grid-cell">2</div>
          <div id="wd-grid-3" className="wd-grid-cell">3</div>
          <div id="wd-grid-4" className="wd-grid-cell">4</div>
          <div id="wd-grid-5" className="wd-grid-cell">5</div>
          <div id="wd-grid-6" className="wd-grid-cell">6</div>
        </div>
      </section>

      {/* ------- A.7 Flex columns -------- */}
      <section id="wd-section-flex">
        <h2 id="wd-h-29">A.7 Flex - Columns 1, 2, 3 laid out horizontally</h2>
        <div id="wd-flex-123" className="wd-flex-123">
          <div id="wd-flex-col-1" className="wd-flex-col">1</div>
          <div id="wd-flex-col-2" className="wd-flex-col">2</div>
          <div id="wd-flex-col-3" className="wd-flex-col">3</div>
        </div>
      </section>

      {/* ------- A.8 React Icons sample -------- */}
      <section id="wd-section-icons">
        <h2 id="wd-h-30">A.8 React Icons Sample</h2>
        <div id="wd-icons" className="wd-icons">
          <FaReact title="React" />
          <FaAndroid title="Android" />
          <FaGithub title="GitHub" />
          <FaLinkedin title="LinkedIn" />
          <FaHtml5 title="HTML5" />
          <FaCss3Alt title="CSS3" />
        </div>
        <p id="wd-p-22" className="wd-note">
          If icons do not render, run <code>npm i react-icons</code>.
        </p>
      </section>

      {/* ------- B.1 Bootstrap containers -------- */}
      <section id="wd-section-bs-container">
        <h2 id="wd-h-31">B.1 Bootstrap - Container padding</h2>
        <div id="wd-bs-container" className="container border p-2">
          This area has thin padding from Bootstrap&apos;s <code>.container</code> and <code>.p-2</code>.
        </div>
      </section>

      {/* ------- B.2 Bootstrap grids -------- */}
      <section id="wd-section-bs-grids" className="mt-3">
        <h2 id="wd-h-32">B.2 Bootstrap - Grids</h2>

        <h3 id="wd-h-33" className="mt-2">Left / Right half</h3>
        <div className="row g-2">
          <div className="col-6"><div className="wd-bs-cell">Left half</div></div>
          <div className="col-6"><div className="wd-bs-cell">Right half</div></div>
        </div>

        <h3 id="wd-h-34" className="mt-3">One / Two thirds</h3>
        <div className="row g-2">
          <div className="col-4"><div className="wd-bs-cell">One third</div></div>
          <div className="col-8"><div className="wd-bs-cell">Two thirds</div></div>
        </div>

        <h3 id="wd-h-35" className="mt-3">Side / Main content</h3>
        <div className="row g-2">
          <div className="col-3"><div className="wd-bs-cell">Side</div></div>
          <div className="col-9"><div className="wd-bs-cell">Main</div></div>
        </div>
      </section>
    </div>
  );
}
