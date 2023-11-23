"use client";
import { userContext } from "../context/userContext";
import { useContext } from "react";
import Link from "next/link";
const Nav = () => {
  const [state, setState] = useContext(userContext);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" href="#">
          سوق بالعربي
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href="/user"
              >
                الرئسية
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                المنتجات
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <ul className="navbar-nav me-lg-4 mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person"></i>
              </a>
              <ul className="dropdown-menu">
                {state && state.user ? (
                  <>
                    <li>
                      <a className="dropdown-item" href="#">
                        {`مرحبا ${state.user.name}`}
                      </a>
                    </li>
                    {state && state.user && state.user.role === "ADMIN" && (
                      <li>
                        <a className="dropdown-item" href="#">
                          لوحة الأدمن
                        </a>
                      </li>
                    )}
                    <li>
                      <a className="dropdown-item" href="#">
                        السلة
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        تسجيل خروج
                      </a>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link className="dropdown-item" href="/login">
                        <span className="btn btn-primary w-100">
                          تسجيل الدخول
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/sign-up">
                        <span className="btn btn-success w-100">
                          تسجيل جديد
                        </span>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
