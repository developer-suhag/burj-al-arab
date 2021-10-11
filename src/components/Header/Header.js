import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import header from "../../images/header.png";
import logo from "../../images/icons/logo.png";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})`,
      }}
      className="header"
    >
      <div className="nav-bar">
        <nav className="nav">
          <ul>
            <li>
              <img className="logo" src={logo} alt="" />
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>

            <li>
              <Link className="btn-book" to="/book">
                Book
              </Link>
            </li>
            {!user.email ? (
              <li>
                <Link to="/login">Login</Link>
              </li>
            ) : (
              <button onClick={logOut} className="log-out">
                Log Out
              </button>
            )}
            <li>
              {user.photoURL ? (
                <img className="profile-img" src={user.photoURL} alt="" />
              ) : (
                <span>{user.displayName}</span>
              )}
            </li>
          </ul>
        </nav>
      </div>
      <div className="title-container">
        <h1>Burj Al Arab</h1>
        <h2>A global icon of Arabian luxury</h2>
      </div>
    </div>
  );
};

export default Header;
