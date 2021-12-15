import styles from "@styles/components/Layout.module.scss"; // Styles
import React, { ReactElement } from 'react';

export function Footer(): ReactElement {
    return (
        <div className={styles.footer}>
            <p>
            <a href="https://github.com/filmmakerDAO/filmmakerdao.com">This website is community-maintained</a>.
            </p>
        </div>
    );
}
