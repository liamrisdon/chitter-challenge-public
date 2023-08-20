
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Header from "../src/components/Header.jsx";
import Footer from "../src/components/Footer.jsx";
import { MemoryRouter } from "react-router-dom";

describe("Header/Footer test", () => {

    it("should render header", () => {
        expect(render(<MemoryRouter><Header /></MemoryRouter>))
    })

    it("should render footer", () => {
        expect(render(<MemoryRouter><Footer /></MemoryRouter>))
    })

})
