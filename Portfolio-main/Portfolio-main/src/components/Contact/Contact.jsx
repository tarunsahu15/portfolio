import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact Me</h2>
            <p>Feel Free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl('contact/emailIcon.png')} alt="EmailIcon" />
                <a href="mailto:sahutarun9753162520@gmail.com">sahutarun9753162520@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/linkedinIcon.png')} alt="EmailIcon" />
                <a href="https://www.linkedin.com/in/tarun-sahu-27b3a0258/">linkedin/tarun-sahu</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/githubIcon.png')} alt="EmailIcon" />
                <a href="https://github.com/tarunsahu15">github.com/tarunsahu15</a>
            </li>
        </ul>
    </footer>
  )
}
