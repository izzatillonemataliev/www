import React from "react";
import { Link } from "react-router-dom";
import { SiTelegram } from "react-icons/si";

function footer() {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/about" className="link link-hover">
            About
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  );
}

export default footer;
