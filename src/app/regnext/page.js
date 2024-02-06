import Image from "next/image";
import styles from "./regnext.module.css";

export default function RegNext() {
  return (
    <main>
        <div className={styles.rect}>
        <Image src="/rectnoise.png" width={640} height={836} alt="Fingerprint" />

        <div className={styles.bioVault}>
        B<span className={styles.iitalics}>i</span>oVa<span className={styles.letteru}>u</span>
        <span className={styles.litalics}>l</span>
        <span className={styles.blackText}>t</span>
        </div>
        </div>
        <div className={styles.circle}>
             <Image src="/Ellipse 10.png" width={350} height={350} alt="Fingerprint" />
            </div>
            <Image className={styles.u5finger}src="/u5.png" width={348} height={360} alt="Fingerprint" />
            <Image className={styles.cufinger}src="/CuntPrint.png" width={40} height={62} alt="Fingerprint" />
        <span className={styles.register}>Register</span>
        <div className={styles.linesContainer}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
        <div className={styles.enter}>
            <span className={styles.entering}>Name</span>
            <span className={styles.entering}>Email</span>
            <span className={styles.entering}>Phone no.</span> 
            <span className={styles.entering}>Add your fingerprints</span> 

        </div>
        </div>
        <div className={styles.outcircle1}></div>
        <div className={styles.outcircle2}></div>
        <div className={styles.outcircle3}></div>

        <div className={styles.boxcontainer}>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
        </div>
        <div className={styles.pluscontainer}>
          <Image className={styles.plus}src="/plus.png"width={24} height={24} alt="Fingerprint" />
          <Image className={styles.plus}src="/plus.png"width={24} height={24} alt="Fingerprint" />  
          <Image className={styles.plus}src="/plus.png"width={24} height={24} alt="Fingerprint" />
         </div>
        <div className={styles.submit}>Submit
        <Image className={styles.plus}src="/submit.png"width={92} height={34} alt="Fingerprint" />
        </div>
    </main>
  );
}
