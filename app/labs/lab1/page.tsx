

'use client'; 
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
          <li><Link href="/labs">Home</Link></li>
          <li><Link href="/labs/lab1">Lab 1 (this page)</Link></li>
          <li><Link href="/labs/lab2">Lab 2</Link></li>
          <li><Link href="/labs/lab3">Lab 3</Link></li>
        </ul>

      </section>

      <section>
        <h2>Kambaz Application</h2>
        <p><Link href="/(Kambaz)">Open Kambaz App</Link></p>
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

      <div id="wd-lab1">
        <h2>Lab 1</h2>
        <h3>HTML Examples</h3>
          <div id="wd-h-tag">
            <h4>Heading Tags</h4>
              Text documents are often broken up into several sections and subsections. Each section is usually prefaced with a short title or heading that attempts to summarize the topic of the section it precedes. For instance this paragraph is preceded by the heading Heading Tags. The font of the section headings are usually larger and bolder than their subsection headings. This document uses headings to introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used to format plain text so that it renders in a browser as large headings. There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest heading.
          </div>
      </div>

      <section id="wd-headings">
        <h2>Heading Tags</h2>
        <h1>h1 example</h1>
        <h2>h2 example</h2>
        <h3>h3 example</h3>
        <h4>h4 example</h4>
        <h5>h5 example</h5>
        <h6>h6 example</h6>
      </section>

      <div id="wd-p-tag">
        <h4>Paragraph Tag</h4>
        <p id="wd-p-1"> 
          This is the first paragraph. The paragraph tag is used to format
          vertical gaps between long pieces of text like this one.

          This is the second paragraph. Even though there is a deliberate white
          gap between the paragraph above and this paragraph, by default
          browsers render them as one contiguous piece of text as shown here on
          the right.

          This is the third paragraph. Wrap each paragraph with the paragraph
          tag to tell browsers to render the gaps.
  
        </p>
        <p id="wd-p-2">
          This is the first paragraph. The paragraph tag is used to format
          vertical gaps between long pieces of text like this one.
        </p>
        <p id="wd-p-3">
          This is the second paragraph. Even though there is a deliberate white
          gap between the paragraph above and this paragraph, by default
          browsers render them as one contiguous piece of text as shown here on
          the right.
        </p>
        <p id="wd-p-4">
          This is the third paragraph. Wrap each paragraph with the paragraph
          tag to tell browsers to render the gaps.
        </p>
      </div>



      <div id="wd-lists">
        <h4>List Tags</h4>
        <h5>Ordered List Tag</h5>
        How to make pancakes:
        <ol id="wd-pancakes">
          <li>Mix dry ingredients.</li>
          <li>Add wet ingredients.</li>
          <li>Stir to combine.</li>
          <li>Heat a skillet or griddle.</li>
          <li>Pour batter onto the skillet.</li>
          <li>Cook until bubbly on top.</li>
          <li>Flip and cook the other side.</li>
          <li>Serve and enjoy!</li>
        </ol>
      </div>  

      <h5>Unordered List Tag</h5>
        My favorite books (in no particular order)
      <ul id="wd-my-books">
        <li>Dune</li>
        <li>Lord of the Rings</li>
        <li>Ender&apos;s Game</li>
        <li>Red Mars</li>
        <li>Mahaghatha</li>
        <li>The Great Gatsby</li>
        <li>Pride and Prejudice</li>
        <li>1984</li>
        <li>To Kill a Mockingbird</li>
      </ul>

   

      <div id="wd-tables">
        <h4>Table Tags</h4>
        <table border={1} width="100%">
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

      <div id="wd-images">
        <h4>Image tag</h4>
        Loading an image from the internet: <br />
        <img id="wd-starship" width="400px"   src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg" />
        <br />
        Loading a local image:
        <br />
        <img id="wd-teslabot" src="/images/teslabot.jpg" height="200px" width="400px"/></div>


      <div id="wd-forms">
        <h4>Form Elements</h4>
        <form id="wd-text-fields">
          <h5>Text Fields</h5>
          <label htmlFor="wd-text-fields-username">Username:</label>
          <input id="wd-text-fields-username" placeholder="parthivmodi" /> <br />
          <label htmlFor="wd-text-fields-password">Password:</label>
          <input type="password" id="wd-text-fields-password" value="123@#$asd" />
          <br />
          <label htmlFor="wd-text-fields-first-name">First name:</label>
          <input type="text" id="wd-text-fields-first-name" title="Parhtiv" /> <br />
          <label htmlFor="wd-text-fields-last-name">Last name:</label>
          <input type="text" id="wd-text-fields-last-name" placeholder="Modi"
            value="" title="The last name" />
          
        </form>
      </div>

      <h5>Text boxes</h5>
        <label>Biography:</label><br/>
        <textarea id="wd-textarea" cols={30} rows={10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
        <br />
      
        <button type="button">
          Delete
        </button><br />
        <button type="button">
          Edit
        </button><br />
        <button type="submit">
          Update
        </button><br />


      <h5 id="wd-buttons">Buttons</h5>
      <button id="wd-all-good"
        onClick={() => alert("Life is Good!")}
            type="button">
        Hello World!
      </button><br />

      <label>
        <input name="b" type="checkbox"/> Tenured
      </label><br />

      Tenured: 
      <br /><label>
        <input name="a" type="radio"/> Yes
      </label><br />
      <label>
        <input name="a" type="radio" checked/> No
      </label><br />

      <h5 id="wd-radio-buttons">Radio buttons</h5>

      <label>Favorite movie genre:</label><br />

      <input type="radio" name="radio-genre" id="wd-radio-comedy"/>
      <label htmlFor="wd-radio-comedy">Comedy</label><br />

      <input type="radio" name="radio-genre" id="wd-radio-drama"/>
      <label htmlFor="wd-radio-drama">Drama</label><br />

      <input type="radio" name="radio-genre" id="wd-radio-scifi"/>
      <label htmlFor="wd-radio-scifi">Science Fiction</label><br />

      <input type="radio" name="radio-genre" id="wd-radio-fantasy"/>
      <label htmlFor="wd-radio-fantasy">Fantasy</label><br />

      <h5 id="wd-checkboxes">Checkboxes</h5>
      <label>Favorite movie genre:</label>

      <input type="checkbox" name="check-genre" id="wd-chkbox-comedy"/>
      <label htmlFor="wd-chkbox-comedy">Comedy</label><br/>

      <input type="checkbox" name="check-genre" id="wd-chkbox-drama"/>
      <label htmlFor="wd-chkbox-drama">Drama</label><br/>

      <input type="checkbox" name="check-genre" id="wd-chkbox-scifi"/>
      <label htmlFor="wd-chkbox-scifi">Science Fiction</label><br/>

      <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>
      <label htmlFor="wd-chkbox-fantasy">Fantasy</label>

      <select name="role">
      <option value="FACULTY">
          Faculty
      </option>
      <option value="STUDENT">
          Student
      </option>
      <option value="ADMIN">
          Admin
      </option>
      </select>

      <h4 id="wd-dropdowns">Dropdowns</h4>
      <h5>Select one</h5>
      <label htmlFor="wd-select-one-genre">
          Favorite movie genre: </label><br/>
      <select id="wd-select-one-genre">
        <option value="COMEDY">Comedy</option>
        <option value="DRAMA">Drama</option>
        <option selected value="SCIFI">
            Science Fiction</option>
        <option value="FANTASY">Fantasy</option>
      </select>

      <h5>Select many</h5>
      <label htmlFor="wd-select-many-genre">
      Favorite all movie genres: </label><br/>
      <select id="wd-select-many-genre" multiple>
        <option selected value="COMEDY">Comedy</option>
        <option value="DRAMA">Drama</option>
        <option selected value="SCIFI">
            Science Fiction</option>
        <option value="FANTASY">Fantasy</option>
      </select>

      <h4>Other HTML field types</h4>

      <label htmlFor="wd-text-fields-salary-start">
      Starting salary:</label>
      <input type="number"
            id="wd-text-fields-salary-start"
            placeholder="1000"
            value="100000"/><br/>

      <label htmlFor="wd-text-fields-rating">
      Rating: </label>
      <input type="range" id="wd-text-fields-rating" placeholder="Doe" max="5" value="4"/><br/>

      <label htmlFor="wd-text-fields-email">
      Email: </label>
      <input type="email"
            placeholder="modi.part@northeastern.edu"
            id="wd-text-fields-email"/><br/>

      <label htmlFor="wd-text-fields-dob">
      Date of birth: </label>
      <input type="date"
            id="wd-text-fields-dob"
            value="2000-01-21"/><br/>

      <h4>Anchor tag</h4>
      Please
      <a href="https://www.lipsum.com" id="wd-lipsum">click here</a>
      to get dummy text<br/>

      <h4>File Upload</h4>
      <form>
        <label htmlFor="file">Upload File:</label>
        <input type="file" id="file" name="file" /><br /><br />
        <button type="submit">Submit</button>
      </form>

    </main>
  );
}
