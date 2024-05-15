import React from "react";
import "./LayoutDefault.scss";
import { Link, Outlet } from "react-router-dom";
import CartMini from "../../components/CartMini";
function LayoutDefault() {
  return (
    <>
      <div className="layout-default">
        <header className="layout-default-header">
          <div className="layout-default-Loho">
            <Link to="/"> Logo</Link>
          </div>
          <div className="layout-default-cart">
            <CartMini/>
           
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
