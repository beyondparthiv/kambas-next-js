export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <h2>Assignment Editor</h2>

      <form id="wd-assignment-form">
        <div>
          <label htmlFor="wd-name">Assignment Name</label><br />
          <input id="wd-name" name="name" defaultValue="A2 - CSS + BOOTSTRAP" />
        </div>

        <br />

        <div>
          <label htmlFor="wd-description">Description</label><br />
          <textarea id="wd-description" name="description" rows={4}>
The assignment is available online Submit a link to the landing page of
          </textarea>
        </div>

        <br />

        <div>
          <label htmlFor="wd-points">Points</label><br />
          <input id="wd-points" name="points" type="number" defaultValue={100} />
        </div>

        <br />

        <div>
          <label htmlFor="wd-display-grade">Display Grade as</label><br />
          <select id="wd-display-grade" defaultValue="points">
            <option value="points">Points</option>
            <option value="percentage">Percentage</option>
            <option value="complete_incomplete">Complete / Incomplete</option>
            <option value="letter">Letter Grade</option>
          </select>
        </div>

        <br />

        <div>
          <label htmlFor="wd-submission-type">Submission Type</label><br />
          <select id="wd-submission-type" defaultValue="online">
            <option value="online">Online</option>
            <option value="on_paper">On Paper</option>
            <option value="external_tool">External Tool</option>
          </select>
        </div>

        <br />

        <fieldset>
          <legend>Online Entry Options</legend>
          <label><input type="checkbox" defaultChecked /> Text Entry</label><br />
          <label><input type="checkbox" /> Website URL</label><br />
          <label><input type="checkbox" /> Media Recordings</label><br />
          <label><input type="checkbox" /> Student Annotation</label><br />
          <label><input type="checkbox" /> File Uploads</label>
        </fieldset>

        <br />

        <div>
          <label htmlFor="wd-assign-to">Assign to</label><br />
          <input id="wd-assign-to" defaultValue="Everyone" />
        </div>

        <br />

        <div>
          <label htmlFor="wd-due-date">Due</label><br />
          <input id="wd-due-date" type="date" defaultValue="2025-10-01" />
        </div>

        <br />

        <div>
          <label htmlFor="wd-available-from">Available from</label><br />
          <input id="wd-available-from" type="date" defaultValue="2025-09-25" />
        </div>

        <br />

        <div>
          <label htmlFor="wd-until">Until</label><br />
          <input id="wd-until" type="date" defaultValue="2025-10-15" />
        </div>

        <br />

        <button type="submit" id="wd-save">Save</button>
      </form>
    </div>
  );
}
