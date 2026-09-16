function Courses() {

  const courses = [
    {
      id: 1,
      name: "Frontend Development",
      code: "SED",
      instructor: "Dr. Arun",
      students: 50,
      duration: "6 months",
      fees: "₹80,000"
    },
    {
      id: 2,
      name: "Python Programming",
      code: "IT",
      instructor: "Dr.Brendan Eich",
      students: 35,
      duration: "6 months",
      fees: "₹75,000"
    },
    {
      id: 3,
      name: "SQL Database Management",
      code: "DBMS",
      instructor: "Dr.Arjun",
      students: 32,
      duration: "4 Years",
      fees: "₹90,000"
    },
    {
      id: 4,
      name: "React JS Development",
      code: "RJS",
      instructor: "Dr.Arun",
      students: 28,
      duration: "3 months",
      fees: "₹82,000"
    }
  ];

  return (
    <div>

      <div className="page-heading">

        <div>
          <h1>Courses</h1>

          <p>
            Manage courses information
          </p>
        </div>

        <button className="primary-btn">
          + Add Course
        </button>

      </div>

      <div className="table-container">

        <table>

          <thead>

            <tr>
              <th>COURSE NAME</th>
              <th>CODE</th>
              <th>INSTRUCTOR</th>
              <th>STUDENTS</th>
              <th>DURATION</th>
              <th>FEES</th>
            </tr>

          </thead>

          <tbody>

            {courses.map((course) => (

              <tr key={course.id}>

                <td>
                  <strong>
                    {course.name}
                  </strong>
                </td>

                <td>
                  {course.code}
                </td>

                <td>
                  {course.instructor}
                </td>

                <td>
                  {course.students}
                </td>

                <td>
                  {course.duration}
                </td>

                <td>
                  {course.fees}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Courses;