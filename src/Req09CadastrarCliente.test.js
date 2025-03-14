import { render, screen, fireEvent } from "@testing-library/react";

import ClienteCadastrarView from "./componentes/cliente_cadastrar/ClienteCadastrarView";  // Importa o componente a ser testado

test("ct01 - verifica se titulo esta na pagina", () => {
  // Renderiza o componente App
  render(<ClienteCadastrarView />);
  const textElement = screen.getByText(/cadastrar cliente/i);
  expect(textElement).toBeInTheDocument();
});

  