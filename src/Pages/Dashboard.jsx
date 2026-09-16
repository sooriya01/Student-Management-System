import StatCard from "../Components/StatCard";

function Dashboard() {

  const students = [
    {
      name: "SooriyaPrakash",
      course: "BCA",
      status: "Active"
    },
    {
      name: "esha",
      course: "B.tech",
      status: "Active"
    },
    {
      name: "Monika",
      course: "Maths",
      status: "Inactive"
    },
    {
      name: "Subiksha",
      course: "B.Tech",
      status: "Active"
    }
  ];

  return (
    <div>

      <div className="page-heading">

        <div>
          <h1>Dashboard</h1>

          <p>
            Welcome to the Student Management System
          </p>
        </div>

      </div>

      <div className="stats-grid">

        <StatCard
          title="Total Students"
          value="120"
          icon="👨‍🎓"
        />

        <StatCard
          title="Total Courses"
          value="8"
          icon="📚"
        />

        <StatCard
          title="Attendance"
          value="92%"
          icon="✅"
        />

        <StatCard
          title="Average Marks"
          value="78%"
          icon="📊"
        />

      </div>

      <div className="dashboard-grid">

        <section className="panel">

          <div className="panel-header">
            <h2>Recent Students</h2>

            <button className="small-link">
              View All
            </button>
          </div>

          <div className="student-list">

            {students.map((student) => (

              <div className="student-row" key={student.name}>

                <div className="student-avatar">
                  {student.name.charAt(0)}
                </div>

                <div className="student-info">

                  <strong>
                    {student.name}
                  </strong>

                  <span>
                    {student.course}
                  </span>

                </div>

                <span
                  className={
                    student.status === "Active"
                      ? "badge green"
                      : "badge red"
                  }
                >
                  {student.status}
                </span>

              </div>

            ))}

          </div>

        </section>

        <section className="panel">

          <div className="panel-header">
            <h2>Recent Marks</h2>

            <button className="small-link">
              View All
            </button>
          </div>

          <div className="marks-list">

            <div className="mark-row">
              <span>Luffy</span>
              <strong>85%</strong>
            </div>

            <div className="mark-row">
              <span>Nami</span>
              <strong>78%</strong>
            </div>

            <div className="mark-row">
              <span>Naruto</span>
              <strong>91%</strong>
            </div>

            <div className="mark-row">
              <span>sasuke</span>
              <strong>88%</strong>
            </div>

          </div>

        </section>

      </div>

    </div>
  );
}

export default Dashboard;