import { render, screen, fireEvent } from "@testing-library/react";

import App from "./App.js";  // Importa o componente a ser testado

test("ct01 - verifica se titulo esta na pagina", () => {
  // Renderiza o componente App
  render(<App />);
  const textElement = screen.getByText(/gestão de clientes/i);
  expect(textElement).toBeInTheDocument();
});


  test("ct02 - ao clicar em cadastrar deve navegar para ClienteCadastrarView", () => {
    render(<App />);

    // Verifica se o botão "Cadastrar" está presente
    const cadastrarButton = screen.getByText("Cadastrar");
    expect(cadastrarButton).toBeInTheDocument();

    // Simula um clique no botão "Cadastrar"
    fireEvent.click(cadastrarButton);

    // Verifica se ClienteCadastrarView é renderizado
    expect(screen.getByText("Cadastrar Cliente")).toBeInTheDocument();
  });
  test("ct03 - ao clicar em consultar deve navegar para ClienteConsultaView", () => {
    render(<App />);

    // Verifica se o botão "Consultar" está presente
    const consultarButton = screen.getByText("Consultar");
    expect(consultarButton).toBeInTheDocument();

    // Simula um clique no botão "Consultar"
    fireEvent.click(consultarButton);

    // Verifica se ClienteConsultarView é renderizado
    expect(screen.getByText("Lista de Clientes")).toBeInTheDocument();
  });