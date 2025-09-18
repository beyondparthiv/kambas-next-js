export default function A2Editor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A2 - CSS + BOOTSTRAP" />
      <br /><br />

      <textarea id="wd-description" rows={4} defaultValue={
        "Style the landing page with CSS and Bootstrap components. Submit the deployed link."
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
