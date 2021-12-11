import styles from "@styles/components/Layout.module.scss"; // Styles
import React, { ReactElement } from 'react';

export function Footer(): ReactElement {
    return (
        <div className={styles.footer}>
            <p>
on a multi-chain mission to empower every human to tell stories
            </p>
        </div>
    );
}
