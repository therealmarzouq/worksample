import React from "react";
import { Menu, Search } from "../../icons";
import { Searchbar, Avatar, Notification } from "../";
import "./Header.css";

const Header = (props) => {
  const toggleMobileMenu = () => {
    props.toggleMobileMenu();
  };

  return (
    <header className="app-l-header">
      <Menu
        className="app-l-mobile-menu__button"
        onClick={() => toggleMobileMenu()}
      />
      <Searchbar
        placeholder="Ask us any question"
        width="w-80"
        className="hidden md:block"
        variant="a"
      />
      <div className="flex items-center">
        <Search className="md:hidden mr-4" />
        <div className="app-l-header__actions">
          <Notification
            userNotificationCount="3"
            className="app-l-header__action--icon"
          />
          <Avatar className="app-l-header__action--icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
