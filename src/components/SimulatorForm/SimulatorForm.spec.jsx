import { render, screen } from "@testing-library/react";
import { ShallowRenderer } from "react-dom/test-utils";
import SimulatorForm from ".";
import { FormContext } from "../../context/FormContext";
import { toHaveClass } from "@testing-library/jest-dom"


describe( 'Active Class When Render for First Time', () => {
  test("Testing isActive Class to brutoActive", () => {
    render(
      <FormContext.Provider value={'brutoActive', 'posActive'}>
        <SimulatorForm/>
      </FormContext.Provider>
    );
    expect(screen.getByText("Bruto")).toHaveClass('isActive')
  });
  test("Testing isActive Class to posActive", () => {
    render(
      <FormContext.Provider value={'brutoActive','posActive'}>
        <SimulatorForm/>
      </FormContext.Provider>
    );
    expect(screen.getByText("PÓS")).toHaveClass('isActive')
  });
} )



