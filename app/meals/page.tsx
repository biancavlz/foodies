import Link from "next/link";
import { Suspense } from "react";

import MealList from "@/components/meals/MealList";
import styles from "./page.module.css";

export const metadata = {
  title: "All meals | Footies",
  description: "Brows delicious meals shared by our community",
};

async function Home() {
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
      <main className={styles.main}>
        <Suspense
          fallback={<p className={styles.loading}>Fetching meal list...</p>}
        >
          <MealList />
        </Suspense>
      </main>
      ;
    </>
  );
}

export default Home;
