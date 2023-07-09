import { render, screen } from "@testing-library/react";
import Home from "../../../ui/views/Public/LandingPage";

describe("Feature: User navigate to the Home page", () => {
  describe("Rule: The elements render correctly", () => {
    test("User see the main title", () => {
      render(<Home />);
      const title = screen.getByText(/Home/i);
      expect(title).toBeInTheDocument();
    });
  });
});
