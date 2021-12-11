import Layout from "@components/Layout"; // Layout wrapper

// Types
import type { ReactElement } from "react";

export default function FAQ(): ReactElement {
  return (
    <Layout>
      <div className="container mx-auto py-20 px-4 sm:w-1/2">
        <h2>Frequently Asked Questions</h2>

        <div className="my-8">
          <h3>What is FilmmakerDAO?</h3>
          <p>
              TBA
          </p>
        </div>

        <div className="my-8">
          <h3>What's the Season I Membership Collection?</h3>
          <p>
           TBA
          </p>
        </div>

        <div className="my-8">
          <h3>How do I mint my Storyteller Card?</h3>
          <p>
            TBA
          </p>
        </div>

        <div className="my-8">
          <h3>What can I do with my Storyteller Card?</h3>
          <p>
            TBA
          
          </p>
        </div>
      </div>
    </Layout>
  );
}
