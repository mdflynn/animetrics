import React from "react";
import "@testing-library/jest-dom";
import { fetchSeasons } from "./apiCalls";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EpisodeDisplay from "../Components/EpisodeDisplay/EpisodeDisplay";
import App from "../Components/App/App";
import { MemoryRouter } from "react-router-dom";
jest.mock("./APIcalls")
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    season: "season1",
  }),
}));

// describe("API calls", () => {
//   it("should call fetchSeasons", () => {
//     const mockFetch = API.fetchSeasons("31964");

//     expect(fetch).toHaveBeenCalledTimes(1);
//     expect(mockFetch).toHaveBeenCalledWith("31964");
//   });
// });

// const episodeData = {
//     video_url:
//       "https://myanimelist.net/anime/31964/Boku_no_Hero_Academia/episode/1",
//     aired: "2018-08-03T00:00:00+00:00",
//     title: "Sweet 1st episode",
//     episode_id: 1,
//   }


describe('ExampleComponent', () => {
  it("should pass a test", () => {
    
  })
  // it('fetches data from server when server returns a successful response', done => { // 1
  //   const mockSuccessResponse = {};
  //   const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
  //   const mockFetchPromise = Promise.resolve({ // 3
  //     json: () => mockJsonPromise,
  //   });
  //   jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise); // 4
    
  //  render(<MemoryRouter>
  //    <EpisodeDisplay />
  //  </MemoryRouter>)
  //  const season1 = screen.getByRole("link", { name: /season 1/i });
  //  userEvent.click(season1);
                            
  //   expect(global.fetch).toHaveBeenCalledTimes(1);
  //   expect(global.fetch).toHaveBeenCalledWith("https://api.jikan.moe/v3/anime/31964/episodes");

    
  // });
});