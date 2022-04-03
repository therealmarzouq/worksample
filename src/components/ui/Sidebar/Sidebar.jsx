import React from "react";
import {
  Users,
  ChevronRight,
  CheckSquare,
  Calendar,
  Clock,
  Chat,
  Cross,
} from "../../icons";
import "./Sidebar.css";

const Sidebar = (props) => {
  const { isOpen } = props;
  const toggleMobileMenu = () => {
    props.toggleMobileMenu();
  };

  return (
    <div className={isOpen.isSidebarOpen ? "relative" : "hidden md:block"}>
      <div className="app-l-sidebar__mobile-overlay" aria-hidden="true"></div>
      <aside className="app-l-sidebar">
        <div className="app-l-sidebar__mobile-toggler">
          <Cross onClick={() => toggleMobileMenu()} />
        </div>
        <div className="app-l-sidebar__header">
          <div className="ml-9">
            <h6 className="app-l-sidebar__header-name">Metacare</h6>
            <p className="app-l-sidebar__header-email">adeyinka@metacare.app</p>
          </div>
        </div>
        <nav className="app-l-menu">
          <ul>
            <li className="app-l-menu__item">
              <a className="app-l-menu__item-link">
                <div className="app-l-menu__title">
                  <Users className="app-l-menu__icon" />
                  Admin
                </div>
                <ChevronRight className="app-l-menu__state-icon" />
              </a>
            </li>
            <li className="app-l-menu__item">
              <a className="app-l-menu__item-link">
                <div className="app-l-menu__title">
                  <CheckSquare className="app-l-menu__icon" />
                  Knowledge Base
                </div>
                <ChevronRight className="app-l-menu__state-icon" />
              </a>
            </li>
            <li className="app-l-menu__item">
              <a className="app-l-menu__item-link">
                <div className="app-l-menu__title">
                  <CheckSquare className="app-l-menu__icon" />
                  Train SAM
                </div>
                <ChevronRight className="app-l-menu__state-icon" />
              </a>
            </li>
            <li className="app-l-menu__item">
              <a className="app-l-menu__item-link">
                <div className="app-l-menu__title">
                  <Calendar className="app-l-menu__icon" />
                  Agent Inbox
                </div>
                <ChevronRight className="app-l-menu__state-icon" />
              </a>
            </li>
            <li className="app-l-menu__item">
              <a className="app-l-menu__item-link">
                <div className="app-l-menu__title">
                  <Clock className="app-l-menu__icon" />
                  Help Center
                </div>
                <ChevronRight className="app-l-menu__state-icon" />
              </a>
            </li>
            <li className="app-l-menu__item app-l-menu__item--active">
              <a className="app-l-menu__item-link">
                <div className="app-l-menu__title">
                  <Chat className="app-l-menu__icon" />
                  Analytics
                </div>
                <ChevronRight className="app-l-menu__state-icon" />
              </a>
              <div className="app-l-menu__dropdown">
                <ul>
                  <li className="app-l-menu__dropdown-item app-l-menu__dropdown-item--active">
                    Teams
                  </li>
                  <li className="app-l-menu__dropdown-item">Knowledge Base</li>
                  <li className="app-l-menu__dropdown-item">Training SAM</li>
                  <li className="app-l-menu__dropdown-item">Help Center</li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
