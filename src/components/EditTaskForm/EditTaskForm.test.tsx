import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { vi } from "vitest";
import EditTaskForm from "./EditTaskForm";
import { taskMock } from "../../mocks/taskMock";

describe("Given an EditTaskForm component", () => {
  const actionMock = vi.fn();

  describe("When it is rendered", () => {
    test("Then it should show a form", () => {
      render(<EditTaskForm updateTask={actionMock} task={taskMock} />);

      const form = screen.getByRole("textbox");

      expect(form).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Update task'", () => {
      const expectedButtonText = "Update task";

      render(<EditTaskForm updateTask={actionMock} task={taskMock} />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });
});
