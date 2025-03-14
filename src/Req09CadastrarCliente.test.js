import { render, screen, fireEvent } from "@testing-library/react";

import App from "./App.js";  // Importa o componente a ser testado

test("ct01 - verifica se titulo esta na pagina", () => {
  // Renderiza o componente App
  render(<App />);
  const textElement = screen.getByText(/cadastrar cliente/i);
  expect(textElement).toBeInTheDocument();
});

  