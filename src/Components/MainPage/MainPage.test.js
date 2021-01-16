import React from "react";
import MainPage from "./MainPage";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

describe("MainPage", () => {
  it("should render the Season 1 link", () => {
    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );
    const seasonButton = screen.getByRole('link', { name: /season\-one\-navigation/i });
    expect(seasonButton).toBeInTheDocument();
  });
  it("should render the Season 2 link", () => {
    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );
    const seasonButton = screen.getByRole('link', { name: /season\-two\-navigation/i });
    expect(seasonButton).toBeInTheDocument();
  });
  it("should render the Season 3 link", () => {
    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );
    const seasonButton = screen.getByRole('link', { name: /season\-three\-navigation/i });
    expect(seasonButton).toBeInTheDocument();
  });
  it("should render the Season 4 link", () => {
    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );
    const seasonButton = screen.getByRole('link', { name: /season\-four\-navigation/i });
    expect(seasonButton).toBeInTheDocument();
  });
  it("should render the Season 5 link", () => {
    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );
    const seasonButton = screen.getByRole('link', { name: /season\-five\-navigation/i });
    expect(seasonButton).toBeInTheDocument();
  });
  it("should render the Movies link", () => {
    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );
    const movieButton = screen.getByRole('link', { name: /movies\-navigation/i });
    expect(movieButton).toBeInTheDocument();
  });
});
