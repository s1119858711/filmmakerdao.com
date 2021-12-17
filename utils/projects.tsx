import { Project } from "../types/interface";

const loot: Project = {
  name: "Storyteller Card",
  description: "FilmmakerDAO Season 0 ",
  mintPrice: {mint: 0.05},
  whatToDo: [
    {
      content: "Mint mine!",
      url: "https://rinkeby.etherscan.io/address/0x458220CCd8d610FDad4B799D8ae446eCB4dEd83D#writeContract"
    }
  ],
  contract: {
    content: "0x458220CCd8d610FDad4B799D8ae446eCB4dEd83D",
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
  image: "https://gateway.pinata.cloud/ipfs/QmfXTPxm5EvnmkroPvW3DfocGrU4MfNkwCaXFE7aYRA1kP"
};

export {
  loot,
};
