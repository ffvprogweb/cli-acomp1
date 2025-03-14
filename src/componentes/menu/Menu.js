import React from "react";
import { Link } from "react-router-dom";
import "./MenuStyles.css"; // Importa o arquivo de estilos
function Menu() {
  return (
    <div className="menu-container">
      <h3>Gerenciamento de Clientes</h3>
      <nav>
        <ul>
          <li>
            <Link data-testid="cadastrar" to="/cadastrar">
              Cadastrar Cliente
            </Link>
          </li>
          <li>
            <Link data-testid="consultar" to="/consultar">
              Consultar Clientes
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Menu;