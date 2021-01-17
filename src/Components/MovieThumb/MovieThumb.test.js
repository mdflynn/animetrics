import React from "react";
import MovieThumb from "./MovieThumb";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

describe("MovieThumb", () => {
  let movieData;
  beforeEach(() => {
    movieData = {
      image_url: "https://cdn.myanimelist.net/images/anime/1736/93138.jpg",
      rated: "PG-13",
      start_date: "2018-08-03T00:00:00+00:00",
      synopsis: "Great movie",
      title: "My Hero Academia: Two Heroes",
    };
  });

  it("should render a movie title", () => {
    render(
      <MemoryRouter>
        <MovieThumb data={movieData} />
      </MemoryRouter>
    );

    const title = screen.getByText("My Hero Academia: Two Heroes");
    expect(title).toBeInTheDocument();
  });

  it("should render a movie image", () => {
    render(
      <MemoryRouter>
        <MovieThumb data={movieData} />
      </MemoryRouter>
    );

    const image = screen.getByRole("img", { name: /movie poster/i });
    expect(image).toBeInTheDocument();
  });

  it("should render a movie synopsis", () => {
    render(
      <MemoryRouter>
        <MovieThumb data={movieData} />
      </MemoryRouter>
    );

    const image = screen.getByText("Great movie");
    expect(image).toBeInTheDocument();
  });
});
