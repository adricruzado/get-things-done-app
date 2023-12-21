import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TaskForm from "./TaskForm";

describe("Given a TaskForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a form", () => {
      render(<TaskForm />);

      const form = screen.getByRole("textbox");

      expect(form).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Create task'", () => {
      const expectedButtonText = "Create task";

      render(<TaskForm />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });
});
