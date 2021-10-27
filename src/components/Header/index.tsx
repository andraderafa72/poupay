import { Link } from "react-router-dom";
import { Container } from "./styles";
import logo from '../../assets/img/logo.png';

interface HeaderProps {
  page: string;
}

export function Header({ page }: HeaderProps) {
  return (
    <Container page={page}>
      <div className="wrapper">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>

        <nav>
          <li>
            <Link to="/" className={page === 'home' ? 'active' : ''}>Home</Link>
          </li>
          <li>
            <Link to="/sobre" className={page === 'sobre' ? 'active' : ''}>Sobre</Link>
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
      </div>
    </Container>
  );
}