import React from "react";
import MovieDisplay from "./MovieDisplay";
import { screen, render, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { fetchMovies } from "../../API/apiCalls";
jest.mock("../../API/apiCalls");

describe("MovieDisplay", () => {
  beforeEach(() => {
    const movieDetails = {
      results: [
        {
          mal_id: 1,
          url: "https://myanimelist.net/anime/31964/Boku_no_Hero_Academia",
          image_url:
            "https://cdn.myanimelist.net/images/anime/10/78745.jpg?s=8ea4cb2e8a861e63757d3c05aa5d32c2",
          title: "Boku Awesome Anime Movie",
          airing: false,
          synopsis:
            'The appearance of "quirks," newly discovered super powers, has been steadily increasing over the years, with 80 percent of humanity possessing various abilities from manipulation of elements to shapes...',
          type: "Movie",
          episodes: 13,
          score: 8.14,
          start_date: "2016-04-03T00:00:00+00:00",
          end_date: "2016-06-26T00:00:00+00:00",
          members: 1795271,
          rated: "PG-13",
        },
        {
          mal_id: 2,
          url:
            "https://myanimelist.net/anime/33486/Boku_no_Hero_Academia_2nd_Season",
          image_url:
            "https://cdn.myanimelist.net/images/anime/12/85221.jpg?s=bc4bd0a738a03bfe9176c5d83dc6f65e",
          title: "Boku Super Awesome TV Show",
          airing: false,
          synopsis:
            "At UA Academy, not even a violent attack can disrupt their most prestigious event: the school sports festival. Renowned across Japan, this festival is an opportunity for aspiring heroes to showcase th...",
          type: "TV",
          episodes: 25,
          score: 8.36,
          start_date: "2017-04-01T00:00:00+00:00",
          end_date: "2017-09-30T00:00:00+00:00",
          members: 1515190,
          rated: "PG-13",
        },
      ],
    };

    fetchMovies.mockResolvedValueOnce(movieDetails);
  });

  it("should render the MovieDisplay", async () => {
    render(
      <MemoryRouter>
        <MovieDisplay />
      </MemoryRouter>
    );

    const movie = await waitFor(() =>
      screen.getByText("Boku Awesome Anime Movie")
    );
    expect(movie).toBeInTheDocument();
  });

  it("should not render an episode", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <MovieDisplay />
        </MemoryRouter>
      );
    });

    const episode = screen.queryByText("Boku Super Awesome TV Show");
    expect(episode).not.toBeInTheDocument();
  });
});
