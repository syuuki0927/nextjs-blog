import { render, screen } from "@testing-library/react";
import Home from "@/pages/";

describe("Home Page", () => {
  it("ボタンが２つ表示されている", () => {
    render(<Home />);

    const deployButton = screen.getByRole("link", { name: /Deploy now/i });
    expect(deployButton).toBeInTheDocument();

    const docsButton = screen.getByRole("link", { name: /Read our docs/i });
    expect(docsButton).toBeInTheDocument();
  });
});
