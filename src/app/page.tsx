import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Logo" width={256} height={256} />
          <div className={styles.captionBox}>
            <div className={styles.caption}>eagely</div>
            <div className={styles.captionUrl}>.dev</div>
          </div>
        </div>
        <div className={styles.links}>
          <a
            href="https://github.com/eagely"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/github.svg"
              alt="GitHub"
              width={64}
              height={64}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/artemiy-smirnov-422482262"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/linkedin.svg"
              alt="LinkedIn"
              width={64}
              height={64}
            />
          </a>
          <a
            href="https://discordapp.com/users/415132870252822539"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/discord.svg"
              alt="Discord"
              width={64}
              height={64}
            />
          </a>
          <a
            href="mailto:me@eagely.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/email.svg"
              alt="ProtonMail"
              width={64}
              height={64}
            />
          </a>
        </div>
      </main>
    </div>
  );
}
