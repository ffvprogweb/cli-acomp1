import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";


test("ct02 - verifica se titulo esta na pagina", () => {
  render(<App />);
  const linkElement = screen.getByText(/cadastrar cliente/i);
  expect(linkElement).toBeInTheDocument();
});