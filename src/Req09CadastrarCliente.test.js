import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("ct01 - verifica se titulo esta na pagina", () => {
  render(<App />);
  const linkElement = screen.getByText(/cadastrar cliente/i);
  expect(linkElement).toBeInTheDocument();
});

test("ct02 - verifica a entrada de dados", async () => {
  render(<App />);
  const cpfInput = screen.getByTestId("cpf");

  await userEvent.type(cpfInput, "123.456.789-00");

  expect(cpfInput).toHaveValue("123.456.789-00");
});


test("ct03 - verifica se a validação impede envio de campos vazios", async () => {
  render(<App />);
  
  const submitButton = screen.getByRole("button", { name: /confirmar/i });

  // Simula clique no botão
  await userEvent.click(submitButton);

  const cpfInput = screen.getByTestId("cpf");
  const nomeInput = screen.getByTestId("nome");

  // Verifica se o campo está marcado como inválido
  expect(cpfInput.validity.valueMissing).toBe(true);
  expect(nomeInput.validity.valueMissing).toBe(true);
});

