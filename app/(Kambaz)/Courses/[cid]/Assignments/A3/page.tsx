export default function A3Editor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A3 - JAVASCRIPT + REACT" />
      <br /><br />

      <textarea id="wd-description" rows={4} defaultValue={
        "Build the interactive features with JavaScript and React. Submit your GitHub repo and deployed link."
      } />
      <br />

      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
