import "./navbar.scss";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// components
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [language, setLanguae] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  const userRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    function handleClickOutside(event) {
      if (userRef.current && !userRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [userRef]);

  // ? telling the browser scroll event handler won't call preventDefault() by adding { passive: true }
  useEffect(() => {
    const isActive = () => {
      window.scrollY > 0 ? setActive(true) : setActive(false);
    };
    window.addEventListener("scroll", isActive, { passive: true });
    return () => {
      window.removeEventListener("scroll", isActive, { passive: true });
    };
  }, []);

  //to stop user from scrollig when the nav is active
  useEffect(() => {
    if (sidebarActive) {
      document.body.classList.add("nav-active");
    } else {
      document.body.classList.remove("nav-active");
    }
  }, [sidebarActive]);

  const currentUser = {
    id: 1,
    username: "Malich",
    isSeller: true,
  };

  // const currentUser = null;

  return (
    <nav className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <p className="text">fiverr</p>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span className="lang" onClick={() => setLanguae(!language)}>
            English
          </span>
          {language && (
            <ul className="langOption">
              <li>
                English
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.6202 2.6083L5.4001 10.8284L2.37973 7.80805C2.23329 7.66161 1.99585 7.66161 1.84939 7.80805L0.96551 8.69193C0.819073 8.83836 0.819073 9.0758 0.96551 9.22227L5.13492 13.3917C5.28135 13.5381 5.51879 13.5381 5.66526 13.3917L15.0344 4.02252C15.1809 3.87608 15.1809 3.63865 15.0344 3.49218L14.1505 2.6083C14.0041 2.46186 13.7667 2.46186 13.6202 2.6083Z"></path>
                </svg>
              </li>
              <li>Deutsch</li>
              <li>Español</li>
              <li>Francais</li>
              <li>Português</li>
              <li>Italiano</li>
              <li>Nederlands</li>
            </ul>
          )}
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && (
            <Link to="/login">
              <span>Sign in</span>
            </Link>
          )}
          {!currentUser && (
            <Link to="/register">
              <button className="join">Join</button>
            </Link>
          )}
          {currentUser && (
            <div ref={userRef} className="user" onClick={() => setOpen(!open)}>
              <img
                src="https://images.unsplash.com/photo-1677165737617-6576f9594949?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80"
                alt="name"
              />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" to="/">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
          <img
            className="menu"
            src="./img/burger-icon.png"
            alt="burger-icon"
            onClick={() => setSidebarActive(!sidebarActive)}
          />
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <div className="container">
              <Link className="link menuLink" to="/">
                Graphics & Design
              </Link>
              <Link className="link menuLink" to="/">
                Video & Animation
              </Link>
              <Link className="link menuLink" to="/">
                Writing & Translation
              </Link>
              <Link className="link menuLink" to="/">
                AI Services
              </Link>
              <Link className="link menuLink" to="/">
                Digital Marketing
              </Link>
              <Link className="link menuLink" to="/">
                Music & Audio
              </Link>
              <Link className="link menuLink" to="/">
                Programming & Tech
              </Link>
              <Link className="link menuLink" to="/">
                Business
              </Link>
              <Link className="link menuLink" to="/">
                Lifestyle
              </Link>
            </div>
          </div>
          <hr />
        </>
      )}
      <div className={`sidebar-container ${sidebarActive ? "active" : ""}`}>
        <Sidebar sidebarActive={sidebarActive} />
      </div>
    </nav>
  );
};

export default Navbar;
