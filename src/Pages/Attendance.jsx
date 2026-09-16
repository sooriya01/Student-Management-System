import { useState } from "react";

function Attendance() {

  const [attendance, setAttendance] = useState([
    {
      id: 1,
      name: "Sooriya Prakash",
      status: "Present"
    },
    {
      id: 2,
      name: "Esha",
      status: "Present"
    },
    {
      id: 3,
      name: "Monika",
      status: "Absent"
    },
    {
      id: 4,
      name: "Subiksha",
      status: "Present"
    },
    {
      id: 5,
      name: "Harsha",
      status: "Absent"
    }
  ]);

  const changeStatus = (id, status) => {

    setAttendance(
      attendance.map((student) =>

        student.id === id
          ? { ...student, status: status }
          : student

      )
    );

  };

  return (
    <div>

      <div className="page-heading">

        <div>
          <h1>Attendance</h1>

          <p>
            Mark student attendance by course
          </p>
        </div>

      </div>

      <div className="filters">

        <div>
          <label>Select Date</label>

          <input
            type="date"
            defaultValue="2026-09-08"
          />
        </div>

        <div>
          <label>Select Course</label>

          <select>

            <option>BCA</option>
            <option>B.Sc</option>
            <option>B.Com</option>

          </select>
        </div>

        <button className="primary-btn">
          Save Attendance
        </button>

      </div>

      <div className="attendance-summary">

        <div>
          <strong>{attendance.length}</strong>
          <span>Total Students</span>
        </div>

        <div>
          <strong>
            {
              attendance.filter(
                student => student.status === "Present"
              ).length
            }
          </strong>

          <span>Present</span>
        </div>

        <div>
          <strong>
            {
              attendance.filter(
                student => student.status === "Absent"
              ).length
            }
          </strong>

          <span>Absent</span>
        </div>

      </div>

      <div className="panel">

        <h2>Student Attendance</h2>

        {attendance.map((student) => (

          <div
            className="attendance-row"
            key={student.id}
          >

            <div className="student-card-top">

              <div className="student-avatar">
                {student.name.charAt(0)}
              </div>

              <strong>
                {student.name}
              </strong>

            </div>

            <div className="attendance-buttons">

              <button
                className={
                  student.status === "Present"
                    ? "present active-status"
                    : "present"
                }
                onClick={() =>
                  changeStatus(student.id, "Present")
                }
              >
                Present
              </button>

              <button
                className={
                  student.status === "Absent"
                    ? "absent active-status"
                    : "absent"
                }
                onClick={() =>
                  changeStatus(student.id, "Absent")
                }
              >
                Absent
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Attendance;