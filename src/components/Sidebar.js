import { NavLink } from 'react-router-dom';
import { FaReact, FaBirthdayCake, FaPlane } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <NavLink exact to="/">
          <FaReact className="logo" />
        </NavLink>
      </div>
      <nav className="nav-container">
        <ul className="nav-links">
          <li className="nav-link">
            <NavLink exact to="/birthdays" activeClassName="active">
              <FaBirthdayCake className="nav-icon" />
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink exact to="/tours" activeClassName="active">
              <FaPlane className="nav-icon" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
