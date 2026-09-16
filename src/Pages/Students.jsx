import { useState } from "react";

function Students() {

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "SooriyaPrakash",
      email: "sooriya@gmail.com",
      course: "BCA",
      phone: "06143"
    },
    {
      id: 2,
      name: "esha",
      email: "esha@gmail.com",
      course: "B.Tech",
      phone: "14143"
    },
    {
      id: 1,
      name: "Monika",
      email: "monika@gmail.com",
      course: "Maths",
      phone: "0002567890"
    },
    {
      id: 2,
      name: "Subiksha",
      email: "subiksha@gmail.com",
      course: "B.Tech",
      phone: "0000123456"
    }
  ]);

  const deleteStudent = (id) => {

    setStudents(
      students.filter((student) => student.id !== id)
    );

  };

  return (
    <div>

      <div className="page-heading">

        <div>
          <h1>Students</h1>

          <p>
            Manage student information
          </p>
        </div>

        <button className="primary-btn">
          + Add Student
        </button>

      </div>

      <div className="student-count">
        Total Students ({students.length})
      </div>

      <div className="student-cards">

        {students.map((student) => (

          <div className="student-card" key={student.id}>

            <div className="student-card-top">

              <div className="large-avatar">
                {student.name.charAt(0)}
              </div>

              <div>
                <h3>{student.name}</h3>
                <p>{student.course}</p>
              </div>

            </div>

            <div className="student-details">

              <p>
                📧 {student.email}
              </p>

              <p>
                📞 {student.phone}
              </p>

            </div>

            <div className="card-actions">

              <button className="edit-btn">
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteStudent(student.id)}
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Students;