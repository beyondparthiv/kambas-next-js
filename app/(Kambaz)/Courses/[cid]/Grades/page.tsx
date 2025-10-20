export default function Grades({ params }: { params: { cid: string } }) {
  return (
    <div id="wd-grades">
      <h1>Grades</h1>
      <div className="table-responsive" style={{ maxWidth: 880 }}>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Student</th>
              <th>A1</th>
              <th>A2</th>
              <th>A3</th>
              <th>Final</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ada Lovelace</td>
              <td>100</td>
              <td>98</td>
              <td>100</td>
              <td>99</td>
            </tr>
            <tr>
              <td>Alan Turing</td>
              <td>97</td>
              <td>94</td>
              <td>96</td>
              <td>96</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
