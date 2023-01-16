/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/about.module.scss"
import { MainTitle } from "../MainTitle/MainTitle"

export const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <MainTitle text="Обо мне" />
      </div>
      <div className={`sub-container ${styles.about__sub_container}`}>
        <img className={styles.about__img} src="/img/about.png" alt="avatar" />
        <div className={styles.about__inner}>
          <h3>
            <span className={styles.about__title__border}>
              <span className={styles.about__title__border__arrow}></span>
              <span className={styles.about__title__border__line} />
            </span>
          </h3>
        </div>
      </div>
    </section>
  )
}
