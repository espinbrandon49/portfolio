import { NavLink } from "react-router-dom";
import Container from "./Container";

const linkBase =
  "text-sm font-medium text-slate-600 transition hover:text-slate-900 hover:underline underline-offset-4";

const activeLink = "text-slate-900";

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <NavLink
            to="/"
            className="text-base font-semibold tracking-tight text-slate-900"
          >
            Brandon Espinosa
          </NavLink>

          <nav className="flex items-center gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? activeLink : ""}`
              }
              end
            >
              Home
            </NavLink>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? activeLink : ""}`
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? activeLink : ""}`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? activeLink : ""}`
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
}
