import { render, screen } from "@testing-library/react";
import Gree from "../components/Gree";

describe("Gree group", () => {
  test("gree test", () => {
    render(<Gree />);
    const noProps = screen.getByText("give");
    expect(noProps).toBeInTheDocument();
  });

  test("gree test 2", () => {
    render(<Gree contextText="tv" />);
    const noProps = screen.getByText("give tv");
    expect(noProps).toBeInTheDocument();
  });

  test("1 h1",()=>{
    render(<Gree />)
    const fh1 = screen.getByText(/first/)
    expect(fh1).toBeInTheDocument()
  })


});
