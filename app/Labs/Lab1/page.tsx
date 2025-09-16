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



// app/labs/lab1/page.tsx
export default function Page() {
  return (
    <main style={{ padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      <h1>Lab 1 - Landing Page</h1>

      {/* Name and Section */}
      <h2>Student Information</h2>
      <p><strong>Name:</strong> Parthiv Modi</p>
      <p><strong>Section:</strong> CS 5520 - Mobile App Dev</p>

      {/* Lab Assignments */}
      <h2>Lab Assignments</h2>
      <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
        <li><a href="/Labs/Lab1">Lab 1</a></li>
        {<li><a href="/Labs/Lab2">Lab 2</a></li>
        /* <li><a href="/labs/lab3">Lab 3</a></li>
        <li><a href="/labs/lab4">Lab 4</a></li> */}
      </ul>

      {/* Kambaz Application */}
      <h2>Kambaz Application</h2>
      <p>
        <a href="/(kambaz)" rel="noopener noreferrer">Open Kambaz App</a>
      </p>

      {/* Source Code Repositories */}
      <h2>Source Code Repositories</h2>
      <ul>
        <li>
          <a href="https://github.com/beyondparthiv/kambas-next-js" target="_blank" rel="noopener noreferrer">
            Kambaz Repository
          </a>
        </li>
      </ul>

      <div id="wd-headings">
        <h1>Main Heading (h1)</h1>
        <h2>Subheading (h2)</h2>
        <h3>Section Title (h3)</h3>
        <h4>Subsection Title (h4)</h4>
        <h5>Minor Heading (h5)</h5>
        <h6>Smallest Heading (h6)</h6>
      </div>

      <div id="wd-paragraphs">
        <h4>Paragraph Example</h4>
        <p id="wd-p-1"> ... </p>
        <p id="wd-p-2">
          This is the first paragraph. The paragraph tag is used to format
          vertical gaps between long pieces of text like this one. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p id="wd-p-3">
          This is the second paragraph. Even though there is a deliberate white
          gap between the paragraph above and this paragraph, by default
          browsers render them as one contiguous piece of text as shown here on
          the right.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
        <p id="wd-p-4">
          This is the third paragraph. Wrap each paragraph with the paragraph
          tag to tell browsers to render the gaps.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </p>
      </div>


      <div id="wd-lists">
        <h4>List Tags</h4>

        <h5>Ordered List Tag</h5>
        <p>How to make pancakes:</p>
        <ol id="wd-pancakes" style={{ marginLeft: "20px", paddingLeft: "20px", listStyleType: "decimal" }}>
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

      <div>
        <h5>Unordered List Tag</h5>
        <p>My favorite books (in no particular order)</p>
        <ul id="wd-my-books" style={{ marginLeft: "20px", paddingLeft: "20px", listStyleType: "disc" }}>
          <li>Dune</li>
          <li>Lord of the Rings</li>
          <li>Ender&apos;s Game</li>
          <li>Red Mars</li>
          <li>The Forever War</li>
        </ul>
      </div>




    </main>
  );
}
