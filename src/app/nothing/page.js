import Image from "next/image";
import styles from "./nothing.module.css";

export default function Nothing() {
  return (
    <main>
      <span className={styles.reg}>Register</span>
      <span className={styles.reg}>Sign in</span>

      <div className={styles.circle}></div>
      <div className={styles.texts}>
        <Image src="/11.png" width={500} height={51} alt="Element" />
      </div>
      <div className={styles.rect}>
        <span>Continue</span>
      </div>
      <Image
        className={styles.i1}
        src="/3.png"
        width={220}
        height={220}
        alt="Element"
      />
      <Image
        className={styles.i2}
        src="/4.png"
        width={98}
        height={98}
        alt="Element"
      />
      <Image
        className={styles.i3}
        src="/5.png"
        width={120}
        height={121}
        alt="Element"
      />
      <Image
        className={styles.vect}
        src="/Vector.png"
        width={610}
        height={440}
        alt="Element"
      />
    </main>
  );
}
