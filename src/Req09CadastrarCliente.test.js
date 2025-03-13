import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("ct01 - verifica se titulo esta na pagina", () => {
  render(<App />);
  const linkElement = screen.getByText(/cadastrar cliente/i);
  expect(linkElement).toBeInTheDocument();
});

