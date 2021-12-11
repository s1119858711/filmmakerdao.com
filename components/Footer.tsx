import styles from "@styles/components/Layout.module.scss"; // Styles
import React, { ReactElement } from 'react';

export function Footer(): ReactElement {
    return (
        <div className={styles.footer}>
            <p>
On a multi-chain mission to empower every human on earth to tell stories.
            </p>
        </div>
    );
}
