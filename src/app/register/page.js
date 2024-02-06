import Image from "next/image";
import styles from "./register.module.css";

export default function Register() {
  return (
    <main>
      <div className={styles.bioVault}>
        B<span className={styles.iitalics}>i</span>oVa<span className={styles.letteru}>u</span>
        <span className={styles.litalics}>l</span>
        <span className={styles.blackText}>t</span>
      </div>
      <div className={styles.circle}>
        <Image src="/u1.png" width={407} height={501} alt="Fingerprint" />
      </div>
      <Image className={styles.finger2}src="/u2.png" width={247} height={380} alt="Fingerprint" />
      <div className={styles.roundrect}>
        <span className={styles.reg}>Register your fingerprint</span>
        <span className={styles.regcircle}>
          <Image src="/u3.png" width={35} height={45} alt="Fingerprint" />
        </span>
      </div>
      <div className={styles.login}>Login
        <Image src="/u4.png" width={52} height={52} alt="Fingerprint" />
      </div>
    </main>
  );
}
