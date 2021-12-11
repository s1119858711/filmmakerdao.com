// Imports
import { default as HTMLHead } from "next/head"; // Meta
import React, { ReactElement, useState } from 'react';

export function Head(): ReactElement {
    return (
        <HTMLHead>
            {/* Primary Meta Tags */}
            <title>FilmmakerDAO Season 1 Membership</title>
            <meta name="title" content="Loot" />
            <meta
                name="description"
                content="The DAO for filmmakers and film enthusiasts "
            />

            {/* OG + Faceook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="http://filmmakerdao.com/" />
            <meta property="og:title" content="Loot" />
            <meta
                property="og:description"
                content="FilmmakerDAO Loot NFT is randomized storytelling card generated and stored on chain."
            />
            <meta property="og:image" content="https://lootproject.com/meta.png" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://www.lootproject.com/" />
            <meta property="twitter:title" content="Loot" />
            <meta
                property="twitter:description"
                content="FilmmakerDAO Loot NFT is randomized storytelling card generated and stored on chain."
            />
            <meta property="twitter:image" content="https://lootproject.com/meta.png" />

            {/* Font */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="true"
            />
            {/* eslint-disable-next-line @next/next/no-page-custom-font */}
            <link
                href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&family=Inconsolata:wght@300&display=swap"
                rel="stylesheet"
            />
            {/* Google Tag Manager */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-2NMMWQ34GS"></script>
            <script>

            </script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-2NMMWQ34GS');
                `,
                }}
            />
            {/* End Google Tag Manager */}

        </HTMLHead>
    );
}