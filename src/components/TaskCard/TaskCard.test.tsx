import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TaskCard from "./TaskCard";
import { taskMock } from "../../mocks/taskMock";
import { Task } from "../../types";

describe("Given a TaskCard component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a task's description", () => {
      const task: Task = taskMock;
      const expectedDescription = taskMock.description;

      render(<TaskCard task={task} />);

      const description = screen.getByText(expectedDescription);

      expect(description).toBeInTheDocument();
    });
  });
});
