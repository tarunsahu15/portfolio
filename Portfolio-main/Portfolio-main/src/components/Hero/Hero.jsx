import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export const Hero = () => {
  const [text] = useTypewriter({
    words: ["Web Designer,",  "Programmer,", "Web Developer,"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 100,
    delaySpeed: 1000,
  });

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, it's me Tarun</h1>
        <p className={styles.description}>
        <span>I'm a {text}</span> <Cursor /> <br />Passionate IT Engineering student from IIIT, Bhopal with good programming skills.
          Constantly seeking  new knowledge and experiences, I stay updated with the latest trends.
        </p>
       
        <div className={styles.heroAction}>
          <a href="mailto:shrinivassk18@gmail.com" className={styles.contactBtn}>Contact Me</a>
          <a href="https://drive.google.com/file/d/1ICngF-sHNDKGIZ_VuitFEu2Fq-pxcvGl/view?usp=drive_link" className={styles.contactBtn}>My Resume</a>
        </div>
        <div className={styles.links}>
       <a href="https://github.com/tarunsahu15" target="_blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg" alt="your-github-username" height="30" width="40" /></a>
       <a href="https://www.linkedin.com/in/tarun-sahu-27b3a0258/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="shrinivas kathare" height="30" width="40" /></a>
       <a href="https://leetcode.com/u/tarun15082002/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" alt="shrinivassk18" height="30" width="40" /></a>
       <a href="https://www.geeksforgeeks.org/user/sahutarun9304g/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/geeks-for-geeks.svg" alt="shrinivaskathare" height="30" width="40" /></a>
       <a href="https://codeforces.com/profile/sahutarun9753162520" target="blank"><img align="center" src="https://cdn.iconscout.com/icon/free/png-512/free-code-forces-3628695-3029920.png?f=webp&w=256" alt="shrinivaskathare" height="30" width="40" /></a>
       
       </div>
      </div>
      <img src={getImageUrl("hero/mypictarun1.png")} alt="Hero Image of me" className={styles.heroImg} />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
}
