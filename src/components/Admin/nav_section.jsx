import React from "react";
import './Styles/admin.css'

const Nav_section = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#section-1" className="icon-booking">
              <span>Bookings</span>
            </a>
          </li>
          <li>
            <a href="#section-2" className="icon-wishlist">
              <span>Wishlist</span>
            </a>
          </li>
          <li>
            <a href="#section-3" className="icon-settings">
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a href="#section-4" className="icon-profile">
              <span>Profile</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav_section;
