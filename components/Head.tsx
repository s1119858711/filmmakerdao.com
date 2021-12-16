// Imports
import { default as HTMLHead } from "next/head"; // Meta
import React, { ReactElement, useState } from 'react';

export function Head(): ReactElement {
    return (
        <HTMLHead>
            {/* Primary Meta Tags */}
            <title>FilmmakerDAO</title>
            <meta name="title" content="FilmmakerDAO" />
            <meta
                name="description"
                content="The DAO for filmmakers and film enthusiasts "
            />

            {/* OG + Faceook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="http://filmmakerdao.com/" />
            <meta property="og:title" content="FilmmakerDAO" />
            <meta
                property="og:description"
                content="The DAO for filmmakers and film enthusiasts ✨"
            />
            <meta property="twitter:image" content="https://gateway.pinata.cloud/ipfs/QmepbViJRBN2wkWzPVAYvvpoFSPSyjoGxXoSHNzuwTFkPh" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://twitter.com/filmmakerDAO" />
            <meta property="twitter:title" content="FilmmakerDAO" />
            <meta
                property="twitter:description"
                content="The DAO for filmmakers and film enthusiasts ✨"
            />
            <meta property="twitter:image" content="https://gateway.pinata.cloud/ipfs/QmepbViJRBN2wkWzPVAYvvpoFSPSyjoGxXoSHNzuwTFkPh" />

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

            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '');
                `,
                }}
            />
            {/* End Google Tag Manager */}

        </HTMLHead>
    );
}