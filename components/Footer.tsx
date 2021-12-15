import styles from "@styles/components/Layout.module.scss"; // Styles
import React, { ReactElement } from 'react';

export function Footer(): ReactElement {
    return (
        <div className={styles.footer}>
            <p>
            This website is community maintained and <a href="https://github.com/filmmakerDAO/filmmakerdao.com">open source</a>.
            </p>
        </div>
    );
}
