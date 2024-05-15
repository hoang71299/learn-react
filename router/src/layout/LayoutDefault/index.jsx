import React from "react";
import "./LayoutDefault.scss";
import { Link, NavLink, Outlet } from "react-router-dom";
function LayoutDefault() {
  const navlinkActive = (e) => {
    console.log(e);
    return e.isActive ? "menu-link menu-link-active" : "menu-link";
  };
  return (
    <>
      <div className="layout-default">
        <header className="layout-default-header">
          <div className="layout-default-logo">Logo</div>
          <div className="menu">
            <ul>
              <li>
                <NavLink to="/" className={navlinkActive}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={navlinkActive}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={navlinkActive}>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className={navlinkActive}>
                  Blog
                </NavLink>
                <ul className="menu-sub">
                  <li>
                    <NavLink to="/blog/news" className={navlinkActive}>
                      Blog news
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog/related" className={navlinkActive}>
                      Blog Related
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/info-user" className={navlinkActive}>
                  Info User
                </NavLink>
              </li>
            </ul>
          </div>
        </header>
        <main className="layout-default-main">
          <Outlet />
        </main>
        <footer className="layout-default-footer">
          Copyright @2024 by hoang
        </footer>
      </div>
    </>
  );
}

export default LayoutDefault;
