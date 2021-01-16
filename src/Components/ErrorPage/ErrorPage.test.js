import React from "react";
import ErrorPage from "./ErrorPage";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

describe("ErrorPage", () => {
    it("should render an error message", () => {
        render(
            <MemoryRouter>
                <ErrorPage />
            </MemoryRouter>
        )
        const error = screen.getByText("Page Not Found");
        expect(error).toBeInTheDocument();
    })
})