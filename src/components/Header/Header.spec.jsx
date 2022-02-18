import { render } from "@testing-library/react";
import Header from ".";

test("title renders correctly", () => {
  const { getByText } = render(<Header title="Simulador de Investimentos" />);

  expect(getByText('Simulador de Investimentos')).toBeInTheDocument
});

