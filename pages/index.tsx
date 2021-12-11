import Layout from "@components/Layout"; // Layout wrapper
import { CardRow } from "@components/Row";
import { onlyLoot } from "../utils/newLists"
import Opensea from "../img/opensea.svg"
import Twitter from "../img/twitter.svg";
import Discord from "../img/discord.svg";

import type { ReactElement } from "react";


export default function Home(): ReactElement {
  return (
    <Layout>
      <div className="mx-auto px-2 sm:px-4 text-center py-10 sm:py-20 justify-around flex flex-wrap hero-img bg-opacity-10">
        <div className="w-full sm:w-1/2">
          <div className="sm:px-4">
          <h1> FilmmakerDAO Season 0 </h1>
            <h2> Membership NFT  </h2>

            <p className="text-xl sm:text-2xl text-gray-300">
            A collection of 1,999 randomized storytelling cards generated and stored on the Ethereum blockchain


</p>
            <div>
              <div className="flex py-8 w-full justify-center space-x-6">
                <a
                  href="https://opensea.io/collection/filmmakerdao-membership-season1"
                  className="self-center p-3 border border-gray-800 rounded-xl  bg-black hover:bg-gray-600"
                  target="_blank"
                >
                  <Opensea className=" hover:text-gray-200  w-6 h-6 mx-2" />
                </a>
                <a
                  href="https://twitter.com/filmmakerdao"
                  className="self-center p-3 border border-gray-800 rounded-xl  bg-black hover:bg-gray-600"
                  target="_blank"
                >
                  <Twitter className="fill-current  text-white w-6 h-6 mx-2" />
                </a>
                <a
                  href="https://discord.com/invite/TfQfnrHVap"
                  className="self-center p-3 border border-gray-800 rounded-xl  bg-black hover:bg-gray-600"
                  target="_blank"
                >
                  <Discord className="fill-current  text-white w-6 h-6 mx-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="start" className="bg-black  sm:py-20 py-10 pb-40 ">
        <div className="container mx-auto mt-8">
          <div className="flex justify-around">
            <div className="px-4 sm:px-20 py-8 rounded-2xl text-center md:w-2/3 ">
              <span className="uppercase sm:text-xl tracking-widest text-gray-400">A thrilling story begins here</span>
              <h1 className="text-center mt-4 capitalize">Get your Storyteller Card</h1>
              <p className="text-xl sm:text-2xl text-gray-400">Join us in this adventure based on the acclaimed Loot project
              where archetypes, themes, and layouts are  as a premise for your own invention
              </p>
            </div>
          </div>
          {onlyLoot.map(({ name, description, project }, i) => {
            return (
              <CardRow key={i} name={name} description={description} project={project} />
            );
          })}

        </div>
      </div>


    </Layout>
  );
}
