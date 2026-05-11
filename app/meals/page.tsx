import Link from "next/link";
import styles from "./page.module.css";

function Home() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals created by{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cooki ti yourself. It is easy and fun
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your favourite recipe</Link>
        </p>
      </header>
      <main className={styles.main}></main>;
    </>
  );
}

export default Home;
