import React from "react";
import App from "./App";
import { screen, render, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { fetchSeasons, fetchMovies } from "../../API/apiCalls";
jest.mock("../../API/apiCalls");

describe("App", () => {
  it("should render the App", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const title = screen.getByRole("link", {
      name: /animetrics for my hero academia fanatics/i,
    });
    expect(title).toBeInTheDocument();
  });
});

describe("App integration", () => {
  beforeEach(() => {
    const episodeDetails = {
      episodes: [
        {
          episode_id: 1,
          title: "Izuku Midoriya: Origin",
          title_japanese: "緑谷出久：オリジン",
          title_romanji: "Midoriya Izuku: Origin ",
          aired: "2016-04-03T00:00:00+00:00",
          filler: false,
          recap: false,
          video_url:
            "https://myanimelist.net/anime/31964/Boku_no_Hero_Academia/episode/1",
          forum_url: "https://myanimelist.net/forum/?topicid=1497575",
        },
        {
          episode_id: 2,
          title: "What It Takes to Be a Hero",
          title_japanese: "ヒーローの条件",
          title_romanji: "Hero no Jouken ",
          aired: "2016-04-10T00:00:00+00:00",
          filler: false,
          recap: false,
          video_url:
            "https://myanimelist.net/anime/31964/Boku_no_Hero_Academia/episode/2",
          forum_url: "https://myanimelist.net/forum/?topicid=1499664",
        },
      ],
    };
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
    fetchSeasons.mockResolvedValueOnce(episodeDetails);
  });

  //episodes integration

  it("should render the first season on click", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );
    });

    const season1 = screen.getByRole("link", {
      name: /season\-three\-navigation/i,
    });
    userEvent.click(season1);

    const seasonTitle = await waitFor(() => screen.getByText("Season 3"));
    expect(seasonTitle).toBeInTheDocument();
  });

  it("should have an external link on the episode card", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );
    });

    const season = screen.getByRole("link", {
      name: /season\-one\-navigation/i,
    });
    userEvent.click(season);

    const externalLink = await waitFor(() => screen.getByTestId("2"));
    expect(externalLink.closest("a")).toHaveAttribute(
      "href",
      "https://myanimelist.net/anime/31964/Boku_no_Hero_Academia/episode/2"
    );
  });

  it("should return home when clicking title after visiting a season", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );
    });

    const season = screen.getByRole("link", {
      name: /season\-four\-navigation/i,
    });
    userEvent.click(season);

    const titleButton = await waitFor(() =>
      screen.getByRole("link", {
        name: /animetrics for my hero academia fanatics/i,
      })
    );
    userEvent.click(titleButton);

    const seasonCard = screen.getByRole("link", {
      name: /season\-three\-navigation/i,
    });
    expect(seasonCard).toBeInTheDocument();

    const seasonDetails = screen.queryByText("Izuku Midoriya: Origin");
    expect(seasonDetails).not.toBeInTheDocument();
  });

  it("should show coming soon when viewing season 5", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const season = screen.getByRole("link", {
      name: /season\-five\-navigation/i,
    });
    userEvent.click(season);

    const comingSoon = await waitFor(() =>
      screen.getByText("Coming Soon...March 27th, 2021")
    );
    expect(comingSoon).toBeInTheDocument();
  });

  //movies integration

  it("should render the movies on click", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );
      const movieButton = screen.queryByRole("link", { name: /movies/i });
      userEvent.click(movieButton);

      const movieTitle = await waitFor(() =>
        screen.getByText("Boku Awesome Anime Movie")
      );
      expect(movieTitle).toBeInTheDocument();
      expect(movieButton).not.toBeInTheDocument();
    });
  });

  it("should be have an external link", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const movieButton = screen.queryByRole("link", { name: /movies/i });
    userEvent.click(movieButton);

    const externalLink = await waitFor(() => screen.getByTestId("1"));
    expect(externalLink.closest("a")).toHaveAttribute(
      "href",
      "https://myanimelist.net/anime/31964/Boku_no_Hero_Academia"
    );
  });

  it("should return home when clicking title from movie page", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const movieButton = screen.getByText("Movies");
    userEvent.click(movieButton);

    const movieTitle = await waitFor(() =>
      screen.getByText("Boku Awesome Anime Movie")
    );
    expect(movieTitle).toBeInTheDocument();

    const titleButton = screen.getByRole("link", {
      name: /animetrics for my hero academia fanatics/i,
    });
    userEvent.click(titleButton);

    expect(
      screen.getByRole("link", { name: /season\-one\-navigation/i })
    ).toBeInTheDocument();
    expect(movieTitle).not.toBeInTheDocument();
  });
});
