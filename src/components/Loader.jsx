import { useEffect } from "react";
import "../sass/_loader.scss";

const Loader = () => {
  useEffect(() => {
    const load = async () => {
      document.querySelector(".loader");
      await load.classList.add("fade-out");
    };
    load();
  });
  return (
    <div className="loader">
      <span className="loader__letter">C</span>
      <span className="loader__letter">H</span>
      <span className="loader__letter">A</span>
      <span className="loader__letter">R</span>
      <span className="loader__letter">G</span>
      <span className="loader__letter">E</span>
      <span className="loader__letter">M</span>
      <span className="loader__letter">E</span>
      <span className="loader__letter">N</span>
      <span className="loader__letter">T</span>
    </div>
  );
};

export default Loader;
