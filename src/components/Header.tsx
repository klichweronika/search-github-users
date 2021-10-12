import "../styles/Header.scss";
import { SunIcon } from "../icons-components/SunIcon";

export const Header = () => {
  return (
    <header className="header">
      <h1>devfinder</h1>
      <div className="header__switch_theme">
        <p>theme</p>
        <SunIcon />
      </div>
    </header>
  );
};
