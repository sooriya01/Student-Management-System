function Marks() {

  const marks = [
    {
      name: "Sooriya Prakash",
      course: "BCA",
      subject: "IOT",
      marks: 85,
      maxMarks: 100
    },
    {
      name: "Esha",
      course: "B.Tech",
      subject: "IOT",
      marks: 75,
      maxMarks: 100
    },
    {
      name: "Monika",
      course: "Maths",
      subject: "IOT",
      marks: 91,
      maxMarks: 100
    },
    {
      name: "Subiksha",
      course: "B.Tech",
      subject: "IOT",
      marks: 88,
      maxMarks: 100
    }
  ];

  return (
    <div>

      <div className="page-heading">

        <div>

          <h1>Marks</h1>

          <p>
            Manage student marks and grades
          </p>

        </div>

        <button className="primary-btn">
          + Add Marks
        </button>

      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon">📊</div>

          <div>
            <p>Total Students</p>
            <h2>120</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🏆</div>

          <div>
            <p>Highest Mark</p>
            <h2>98%</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📈</div>

          <div>
            <p>Pass Rate</p>
            <h2>94%</h2>
          </div>
        </div>

      </div>

      <div className="table-container">

        <table>

          <thead>

            <tr>
              <th>STUDENT NAME</th>
              <th>COURSE</th>
              <th>SUBJECT</th>
              <th>MARKS</th>
              <th>MAX MARK</th>
              <th>PERCENTAGE</th>
            </tr>

          </thead>

          <tbody>

            {marks.map((student, index) => {

              const percentage =
                (student.marks / student.maxMarks) * 100;

              return (

                <tr key={index}>

                  <td>
                    <strong>
                      {student.name}
                    </strong>
                  </td>

                  <td>
                    {student.course}
                  </td>

                  <td>
                    {student.subject}
                  </td>

                  <td>
                    {student.marks}
                  </td>

                  <td>
                    {student.maxMarks}
                  </td>

                  <td>
                    {percentage}%
                  </td>

                </tr>

              );

            })}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Marks;