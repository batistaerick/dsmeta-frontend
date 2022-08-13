import logo from "../../assets/img/logo.svg";
import "./styles.css";

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Developed by
          <a
            href="https://www.linkedin.com/in/erick-batista-prado"
            target="_blank"
            rel="noreferrer"
          >
            &nbsp;Erick Batista
          </a>
        </p>
      </div>
    </header>
  );
}

export default Header;
