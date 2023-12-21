import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TaskContainer from "./TaskContainer";

describe("Given a TaskContainer component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a form", () => {
      render(<TaskContainer />);

      const form = screen.getByRole("textbox");

      expect(form).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Create task'", () => {
      const expectedButtonText = "Create task";

      render(<TaskContainer />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });
});
