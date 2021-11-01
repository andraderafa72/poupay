import { Link } from "react-router-dom";
import { Container } from "./styles";
import logo from '../../assets/img/logo.png';
import { useState } from "react";

interface HeaderProps {
  page: string;
}

export function Header({ page }: HeaderProps) {
  const [isBurgerOpen, setisBurgerOpen] = useState(false)
  return (
    <Container page={page} isBurgerOpen={isBurgerOpen}>
      <div className="wrapper">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>

        <nav>
          <li>
            <Link to="/" className={page === 'home' ? 'active' : ''}>Home</Link>
          </li>
          <li>
            <Link to="/sobrenos" className={page === 'sobre' ? 'active' : ''}>Sobre</Link>
          </li>
          <li>
            <Link to="/planos" className={page === 'planos' ? 'active' : ''}>Planos</Link>
          </li>
          <li>
            <Link to="/contato" className={page === 'contato' ? 'active' : ''}>Contato</Link>
          </li>

          <li>
            <select name="language" id="">
              <option value="">PT</option>
              <option value="">EN</option>
              <option value="">ES</option>
            </select>
          </li>
        </nav>

        <div className="auth-buttons">
          <Link to="/">Login</Link>
          <Link to="/" className="primary">Começar grátis</Link>
        </div>

        <button 
        className={`hamburger hamburger--squeeze ${isBurgerOpen ? 'is-active' : ''}`} 
        type="button"
        onClick={() => setisBurgerOpen(!isBurgerOpen)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        <div className="background"></div>
        <div className="burger-menu">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <nav>
            <li>
              <Link to="/" className={page === 'home' ? 'active' : ''}>Home</Link>
            </li>
            <li>
              <Link to="/sobrenos" className={page === 'sobre' ? 'active' : ''}>Sobre</Link>
            </li>
            <li>
              <Link to="/planos" className={page === 'planos' ? 'active' : ''}>Planos</Link>
            </li>
            <li>
              <Link to="/contato" className={page === 'contato' ? 'active' : ''}>Contato</Link>
            </li>

            <li>
              <select name="language" id="">
                <option value="">PT</option>
                <option value="">EN</option>
                <option value="">ES</option>
              </select>
            </li>
          </nav>

        </div>
      </div>
    </Container>
  );
}