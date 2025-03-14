import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import ClienteCadastrarView from "./componentes/cliente_cadastrar/ClienteCadastrarView";  // Importa o componente a ser testado

test("ct01 - verifica se titulo esta na pagina", () => {
  render(<App />);
  const textElement = screen.getByText(/cadastrar cliente/i);
  expect(textElement).toBeInTheDocument();
});

  