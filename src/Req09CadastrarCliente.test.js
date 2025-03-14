import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App.js";  // Importa o componente a ser testado

test("ct01 - verifica se titulo esta na pagina", () => {
  // Renderiza o componente App
  render(<App />);
  const textElement = screen.getByText(/gestão de clientes/i);
  expect(textElement).toBeInTheDocument();
});
  