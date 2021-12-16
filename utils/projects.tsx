import { Project } from "../types/interface";

const loot: Project = {
  name: "Storyteller Card",
  description: "FilmmakerDAO Season 0 ",
  whatToDo: [
    {
      content: "Mint mine!",
      url: "https://etherscan.io/address/<>#writeContract"
    }
  ],
  contract: {
    content: "tba",
    url: "https://etherscan.io/"
  },
  twitter: {
    url: "https://twitter.com/filmmakerdao"
  },
  discord: {
    url: "https://discord.com/invite/TfQfnrHVap"
  },
  opensea: {
    url: "https://opensea.io/thefilmmakerdao.eth"
  },
  image: "./card.svg"
};

export {
  loot,
};
