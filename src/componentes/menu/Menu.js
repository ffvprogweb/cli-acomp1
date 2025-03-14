import React from "react";

function Menu({ mudarPagina }) {
  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => mudarPagina("cadastrar")}>Cadastrar Cliente</button>
        </li>
        <li>
          <button onClick={() => mudarPagina("consultar")}>Consultar Clientes</button>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
