import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
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

  useEffect(() => {
    const isActive = () => {
      window.scrollY > 0 ? setActive(true) : setActive(false);
    };
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "Malich",
    isSeller: true,
  };

  return (
    <nav
      
      className={active || pathname !== "/" ? "navbar active" : "navbar"}
    >
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
          <span>English</span>
          {!currentUser && <span>Sign in</span>}
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}
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
