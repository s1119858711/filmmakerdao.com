import { Project } from "../types/interface";

const loot: Project = {
  name: "Storyteller Card",
  description: "FilmmakerDAO Season 0 ",
  mintPrice: {mint: 0.05},
  whatToDo: [
    {
      content: "Mint mine!",
      url: "https://www.generativestory.com/"
    }
  ],
  contract: {
    content: "0x9213256Fe89FA0428e8546910A8D78180dBbDc38",
    url: "https://etherscan.io/"
  },
  twitter: {
    url: "https://twitter.com/filmmakerdao"
  },
  discord: {
    url: "https://discord.com/invite/TfQfnrHVap"
  },
  opensea: {
    url: "https://opensea.io/collection/storyteller-card"
  },
  image: "https://gateway.pinata.cloud/ipfs/QmcDmV7fekHmqzVAAo4SJm2Ap59WApAAPGhSR3qoNqN56Z"
};

export {
  loot,
};
