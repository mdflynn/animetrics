import React from "react";
import EpisodeThumb from "./EpisodeThumb";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

describe("EpisodeThumb", () => {
  let episodeData;

  beforeEach(() => {
    episodeData = {
      video_url:
        "https://myanimelist.net/anime/31964/Boku_no_Hero_Academia/episode/1",
      aired: "2018-08-03T00:00:00+00:00",
      title: "Sweet 1st episode",
      episode_id: 1,
      id: 1
    };
  });

  it("should render an episode title", () => {
    render(
      <MemoryRouter>
        <EpisodeThumb data={episodeData} />
      </MemoryRouter>
    );
    const title = screen.getByText("Sweet 1st episode");
    expect(title).toBeInTheDocument();
  });

  it("should render an episode air date", () => {
    render(
      <MemoryRouter>
        <EpisodeThumb data={episodeData} />
      </MemoryRouter>
    );
    const date = screen.getByText("Aired on: 08/03/2018");
    expect(date).toBeInTheDocument();
  });

  it("should render an episode link", () => {
    render(
      <MemoryRouter>
        <EpisodeThumb data={episodeData} />
      </MemoryRouter>
    );
    const link = screen.getByText("More Details...");
    expect(link).toBeInTheDocument();
  });

  it("should render an episode number", () => {
    render(
      <MemoryRouter>
        <EpisodeThumb data={episodeData} />
      </MemoryRouter>
    );
    const number = screen.getByText("Episode #1");
    expect(number).toBeInTheDocument();
  });
});
