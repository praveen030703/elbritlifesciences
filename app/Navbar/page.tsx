import Image from "next/image";
import "../globals.css";
import "../responsive.css";

export default function Navbar() {
  return (
    <nav className="text-white">
      <div className="logo">
        <img
          src="/images/logo.png"
          alt="logo"
          className="logo"
          loading="lazy"
        />
      </div>
    </nav>
  );
}
