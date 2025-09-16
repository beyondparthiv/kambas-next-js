// export default function Lab1() {
//   return (
//     <div id="wd-p-tag">
//         <h4>Paragraph Tag</h4>
//         <p id="wd-p-1"> ... </p>
//         <p id="wd-p-2">
// This is the first paragraph. The paragraph tag is used to format
// vertical gaps between long pieces of text like this one. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//         </p>
//         <p id="wd-p-3">
// This is the second paragraph. Even though there is a deliberate white
// gap between the paragraph above and this paragraph, by default
// browsers render them as one contiguous piece of text as shown here on
// the right.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
//         </p>
//         <p id="wd-p-4">
// This is the third paragraph. Wrap each paragraph with the paragraph
// tag to tell browsers to render the gaps.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
//         </p>
//       </div>
//       );}



'use client'; // This makes the whole page a Client Component so we can use onClick, useState, etc.
import "./lab1.css";

// app/labs/lab1/page.tsx
import Link from "next/link";

export default function Page() {
  return (
    <main style={{ padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      <header>
        <h1>CS 5520 - Web Development</h1>
        <p><strong>Student:</strong> Parthiv Modi</p>
        <p><strong>NUID:</strong> 002025096</p>
        <p><strong>Email:</strong> modi.par@northeastern.edu</p>
      </header>

      <section>
        <h2>Labs</h2>
        <ul>
          <li><Link href="/Labs">Home</Link></li>
          <li><Link href="/Labs/lab1">Lab 1</Link></li>
          <li><Link href="/Labs/lab2">Lab 2</Link></li>
          <li><Link href="/Labs/lab3">Lab 3</Link></li>
        </ul>
      </section>

      <section>
        <h2>Kambaz Application</h2>
        <p><Link href="/kambaz">Open Kambaz App</Link></p>
      </section>

      <section>
        <h2>Source Code</h2>
        <ul>
          <li>
            <a href="https://github.com/beyondparthiv/kambas-next-js" target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
          </li>
        </ul>
      </section>

      <section id="wd-headings">
        <h2>Heading Tags</h2>
        <h1>h1 example</h1>
        <h2>h2 example</h2>
        <h3>h3 example</h3>
        <h4>h4 example</h4>
        <h5>h5 example</h5>
        <h6>h6 example</h6>
      </section>

      <section id="wd-paragraphs">
        <h2>Paragraph Tag</h2>
        <p id="wd-p-1">This is a short paragraph.</p>
        <p id="wd-p-2">This is the first long paragraph. Lorem ipsum text to show spacing across multiple lines.</p>
        <p id="wd-p-3">This is the second long paragraph. More lorem ipsum to demonstrate vertical gaps between paragraphs.</p>
        <p id="wd-p-4">This is the third paragraph. Each paragraph is wrapped in a p tag.</p>
      </section>

      <section id="wd-lists">
        <h2>List Tags</h2>

        <h3>Ordered List Elements</h3>
        <p>How to make pancakes (my favorite recipe):</p>
        <ol id="wd-pancakes">
          <li>Mix dry ingredients.</li>
          <li>Add wet ingredients.</li>
          <li>Stir to combine.</li>
          <li>Heat a skillet or griddle.</li>
          <li>Pour batter onto the skillet.</li>
          <li>Cook until bubbly on top.</li>
          <li>Flip and cook the other side.</li>
          <li>Serve and enjoy.</li>
        </ol>

        <h3>Unordered List Elements</h3>
        <p>My favorite books</p>
        <ul id="wd-my-books">
          <li>Dune</li>
          <li>Lord of the Rings</li>
          <li>Ender&apos;s Game</li>
          <li>Red Mars</li>
          <li>The Forever War</li>
        </ul>
      </section>

      <div id="wd-tables">
        <h4>Table Tags</h4>
        <table width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Q1</td><td>HTML</td><td>2/3/21</td><td>85</td></tr>
            <tr><td>Q2</td><td>CSS</td><td>2/10/21</td><td>90</td></tr>
            <tr><td>Q3</td><td>JavaScript</td><td>2/17/21</td><td>95</td></tr>
            <tr><td>Q4</td><td>React</td><td>2/24/21</td><td>92</td></tr>
            <tr><td>Q5</td><td>Next.js</td><td>3/3/21</td><td>88</td></tr>
            <tr><td>Q6</td><td>Node.js</td><td>3/10/21</td><td>94</td></tr>
            <tr><td>Q7</td><td>Express</td><td>3/17/21</td><td>90</td></tr>
            <tr><td>Q8</td><td>MongoDB</td><td>3/24/21</td><td>85</td></tr>
            <tr><td>Q9</td><td>HTML & CSS</td><td>3/31/21</td><td>97</td></tr>
            <tr><td>Q10</td><td>TypeScript</td><td>4/7/21</td><td>93</td></tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}><strong>Average</strong></td>
              <td>91</td>
            </tr>
          </tfoot>
        </table>
      </div>


      <div id="wd-forms">
        <h4>Form Tags</h4>

        <form>
          {/* Basic fields */}
          <div className="row">
            <label htmlFor="username">Username</label>
            <input id="username" name="username" type="text" placeholder="your_id" />
          </div>

          <div className="row">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" placeholder="enter password" />
          </div>

          <div className="row">
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" name="firstName" type="text" placeholder="Parthiv" />
          </div>

          <div className="row">
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" name="lastName" type="text" placeholder="Modi" />
          </div>

          <div className="row">
            <label htmlFor="bio">Textareas</label>
            <textarea id="bio" name="bio" rows={4} placeholder="Write something..."></textarea>
          </div>

          <div className="row">
            <label htmlFor="resume">File upload</label>
            <input id="resume" name="resume" type="file" />
          </div>

          {/* Radios - choose one */}
          <fieldset>
            <legend>Choose one genre (radio)</legend>
            <div className="inline-group">
              <label><input type="radio" name="genreRadio" value="comedy" /> Comedy</label>
              <label><input type="radio" name="genreRadio" value="drama" /> Drama</label>
              <label><input type="radio" name="genreRadio" value="scifi" /> SciFi</label>
              <label><input type="radio" name="genreRadio" value="fantasy" /> Fantasy</label>
            </div>
          </fieldset>

          {/* Checkboxes - choose many */}
          <fieldset>
            <legend>Select genres (checkbox)</legend>
            <div className="inline-group">
              <label><input type="checkbox" name="genreCheck" value="comedy" /> Comedy</label>
              <label><input type="checkbox" name="genreCheck" value="drama" /> Drama</label>
              <label><input type="checkbox" name="genreCheck" value="scifi" /> SciFi</label>
              <label><input type="checkbox" name="genreCheck" value="fantasy" /> Fantasy</label>
            </div>
          </fieldset>

          {/* Selects */}
          <div className="row">
            <label htmlFor="favGenre">Select one option</label>
            <select id="favGenre" name="favGenre" defaultValue="scifi">
              <option value="comedy">Comedy</option>
              <option value="drama">Drama</option>
              <option value="scifi">SciFi</option>
              <option value="fantasy">Fantasy</option>
            </select>
          </div>

          <div className="row">
            <label htmlFor="manyGenres">Select many options</label>
            <select id="manyGenres" name="manyGenres" multiple size={4}>
              <option value="comedy">Comedy</option>
              <option value="drama">Drama</option>
              <option value="scifi">SciFi</option>
              <option value="fantasy">Fantasy</option>
            </select>
          </div>

          {/* Other inputs */}
          <div className="row">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@northeastern.edu" />
          </div>

          <div className="row">
            <label htmlFor="salary">Salary</label>
            <input id="salary" name="salary" type="number" min={0} step={1000} placeholder="50000" />
          </div>

          <div className="row">
            <label htmlFor="rating">Rating</label>
            <input id="rating" name="rating" type="range" min={0} max={10} defaultValue={7} />
          </div>

          <div className="row">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value="2025-09-09"
            />
          </div>



          {/* Alert button for rubric */}
          <div className="actions">
            {/* If your page is a Server Component, render a client-only alert button component here */}
            <button type="button" onClick={() => alert('Hello, You just clicked Button')}>Click me to alert</button>
          </div>
        </form>
      </div>








    </main>
  );
}
