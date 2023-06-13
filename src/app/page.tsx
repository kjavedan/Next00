import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h3>
          <Link href={"/dashboard"}>dashboard</Link>
        </h3>
      </div>
    </main>
  );
}
