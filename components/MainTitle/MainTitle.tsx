import styles from "../../styles/mainTitle.module.scss"

export const MainTitle = ({ text }: { text: string }) => (
  <h2 className={styles.title}>
    {text.toUpperCase()}
    <span className={styles.title__border}></span>
  </h2>
)
