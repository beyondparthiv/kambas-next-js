export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
      </table>

      {/* Display Grade dropdown */}
      <label htmlFor="wd-display-grade">Display Grade as</label>
      <select id="wd-display-grade" defaultValue="percentage">
        <option value="percentage">Percentage</option>
        <option value="points">Points</option>
        <option value="complete_incomplete">Complete / Incomplete</option>
        <option value="letter">Letter Grade</option>
      </select>

      {/* Submission Type dropdown */}
      <label htmlFor="wd-submission-type">Submission Type</label>
      <select id="wd-submission-type" defaultValue="online" >
        <option value="online">Online</option>
        <option value="on_paper">On Paper</option>
        <option value="external_tool">External Tool</option>
      </select>

      {/* Online Entry Options checkboxes */}
      <fieldset style={{ margin: "8px 0 12px", width: 420 }}>
        <legend>Online Entry Options</legend>
        <label><input type="checkbox" defaultChecked /> Text Entry</label><br />
        <label><input type="checkbox" /> Website URL</label><br />
        <label><input type="checkbox" /> Media Recordings</label><br />
        <label><input type="checkbox" /> Student Annotation</label><br />
        <label><input type="checkbox" /> File Uploads</label>
      </fieldset>

      {/* Assign to with default value */}
      <label htmlFor="wd-assign-to">Assign to</label>
      <input id="wd-assign-to" defaultValue="Everyone" />

      {/* Dates of type date with default values */}
      <label htmlFor="wd-due-date">Due</label>
      <input id="wd-due-date" type="date" defaultValue="2025-10-01"/>

      <label htmlFor="wd-available-from">Available from</label>
      <input id="wd-available-from" type="date" defaultValue="2025-09-25" />

      <label htmlFor="wd-until">Until</label>
      <input id="wd-until" type="date" defaultValue="2025-10-15" />
    
    </div>
);}
