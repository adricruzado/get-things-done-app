import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TaskForm from "./TaskForm";
import { vi } from "vitest";

describe("Given a TaskForm component", () => {
  const actionMock = vi.fn();

  describe("When it is rendered", () => {
    test("Then it should show a form", () => {
      render(<TaskForm createTask={actionMock} />);

      const form = screen.getByRole("textbox");

      expect(form).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Create task'", () => {
      const expectedButtonText = "Create task";

      render(<TaskForm createTask={actionMock} />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });
});
