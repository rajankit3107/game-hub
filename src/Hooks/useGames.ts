import useData from "./useData";
export interface Platform { //we creare interface to define the type of the data we are going to use.
  id : number;
  name: string;
  slug : string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
  }

const useGames = () => useData<Game>("/games");

export default useGames;