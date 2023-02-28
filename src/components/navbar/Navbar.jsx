import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [language, setLanguae] = useState(false);
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
            <span className="text">fiverr</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span className="lang" onClick={() => setLanguae(!language)}>English</span>
          {language && (
            <div className="langOption">
              <span>Deutsch</span>
              <span>Español</span>
              <span>Francais</span>
              <span>Português</span>
              <span>Italiano</span>
              <span>Nederlands</span>
            </div>
          )}
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <span>Sign in</span>}
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
    </nav>
  );
};

export default Navbar;
