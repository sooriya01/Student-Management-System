function Header() {
  return (
    <header className="header">

      <div className="header-title">
        Student Management System
      </div>

      <div className="header-right">

        <div className="admin">

          <div className="admin-avatar">
            A
          </div>

          <span>Admin</span>

        </div>

        <button className="logout">
          Logout
        </button>

      </div>

    </header>
  );
}

export default Header;