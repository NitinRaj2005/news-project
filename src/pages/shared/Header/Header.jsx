import React, { useContext } from "react";
import logo from "../../../assets/assets/logo.png";
import moment from "moment/moment";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {/* Logo + Title Section */}
      <div className="py-5 text-center">
        <h1
          className="text-6xl md:text-7xl font-bold"
          style={{
            fontFamily: "'Playfair Display', serif",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          The News Times
        </h1>

        <p className="text-slate-700 text-sm py-2">
          Journalism without fear and favour
        </p>

        <p className="font-medium">
          {moment().format("dddd, MMMM Do, YYYY")}
        </p>
      </div>

      {/* Marquee Section */}
      <div className="flex bg-slate-300 rounded-md p-3 gap-2">
        <Link to="/">
          <button className="btn btn-outline btn-error border-spacing-0 font-bold shadow-md shadow-slate-700">
            Latest
          </button>
        </Link>

        <Marquee speed={120} className="font-semibold" pauseOnHover={true}>
          “Creativity is allowing yourself to make mistakes. Art is knowing
          which ones to keep.” – Scott Adams{" "}
          <span className="mx-20">
            “Creativity is allowing yourself to make mistakes. Art is knowing
            which ones to keep.” – Scott Adams
          </span>
        </Marquee>
      </div>

      {/* Navbar section (if any) */}
    </div>
  );
};

export default Header;
