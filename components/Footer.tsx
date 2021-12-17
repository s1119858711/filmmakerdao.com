import styles from "@styles/components/Layout.module.scss"; // Styles
import React, { ReactElement } from 'react';

export function Footer(): ReactElement {
    return (
        <div className={styles.footer}>
            <a href="https://github.com/filmmakerDAO/filmmakerdao.com">
               Made with 🎬 in the Metaverse</a>
        </div>
    );
}
