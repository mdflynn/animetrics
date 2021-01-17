import React from "react";
import EpisodeDisplay from "./EpisodeDisplay";
import { screen, render, waitFor, queryByText } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { fetchSeasons } from "../../API/apiCalls";
import App from "../App/App";
import userEvent from "@testing-library/user-event";

jest.mock("../../API/apiCalls");
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    season: "season2",
  }),
}));

describe("EpisodeDisplay", () => {
  let episodeDetails;
  beforeEach(() => {
    episodeDetails = {
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
    fetchSeasons.mockResolvedValueOnce(episodeDetails);
  });

  it("should render an episode with a title", async () => {
    render(
      <MemoryRouter>
        <EpisodeDisplay />
      </MemoryRouter>
    );
    const title = await waitFor(() =>
      screen.getByText("Izuku Midoriya: Origin")
    );
    expect(title).toBeInTheDocument();
  });

  it("should render an episode with an id", async () => {
    render(
      <MemoryRouter>
        <EpisodeDisplay />
      </MemoryRouter>
    );
    const id = await waitFor(() => screen.getByText("Episode #1"));
    expect(id).toBeInTheDocument();
  });

  it("should render an episode with an air date", async () => {
    render(
      <MemoryRouter>
        <EpisodeDisplay />
      </MemoryRouter>
    );
    const date = await waitFor(() => screen.getByText("Aired on: 04/03/2016"));
    expect(date).toBeInTheDocument();
  });

  it("should render an episode with a link", async () => {
    render(
      <MemoryRouter>
        <EpisodeDisplay />
      </MemoryRouter>
    );
    const link = await waitFor(() => screen.getByText("Aired on: 04/03/2016"));
    expect(link).toBeInTheDocument();
  });

  it("should render an episode with a link", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <EpisodeDisplay />
        </MemoryRouter>
      );
    });
    const seasonTitle = screen.getByText("Season 2");
    expect(seasonTitle).toBeInTheDocument();
  });

  it("should show 'loading' while doing fetch'", async () => {
    episodeDetails.episodes = [];
    await act(async () => {
      render(
        <MemoryRouter>
          <EpisodeDisplay />
        </MemoryRouter>
      );
    });
    const loading = screen.getByText("Loading...");
    expect(loading).toBeInTheDocument();
  });

  it("should render an error page if no episode data", async () => {
    episodeDetails.episodes = null;
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const season = screen.getByRole("link", {
      name: /season\-one\-navigation/i,
    });
    userEvent.click(season);

    const errorText = await waitFor(() => screen.getByText("Page Not Found"));
    expect(errorText).toBeInTheDocument();

    const title = screen.queryByText("Izuku Midoriya: Origin");
    expect(title).not.toBeInTheDocument();
  });
});
