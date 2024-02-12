"use client";
import Image from "next/image";
import styles from "./logincopy.module.css";
import { useState } from "react";

export default function Login() {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const   handleSubmit = async (e) => {
    e.preventDefault();
    // Add your logic for handling form submission, e.g., send data to server
    console.log('Name:', name);
    console.log('Email:', email);
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }), // Send form data as JSON
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Registration successful:", data);
    } catch (error) {
      
    }
    // Add your logic to send data to the server
  };
  return (
    <main>
        <Image className={styles.cufinger} src='/CuntPrint.png' width={35} height={54} alt="Fingerprint"/>
        <div className={styles.bioVault}>
        B<span className={styles.iitalics}>i</span>oVa<span className={styles.letteru}>u</span>
        <span className={styles.litalics}>l</span>
        <span className={styles.blackText}>t</span>
        </div>
        <div className={styles.rect}>
            <div className={styles.line}></div>
        <span className={styles.login}>Login</span>
        <span className={styles.already}>Need to register?</span>
        <span className={styles.reg}>Register</span>

        <Image className={styles.upload}src="/upload.png"width={90} height={90} alt="Fingerprint" />
        <div className={styles.boxcontainer}>
            <div className={styles.box}>
            </div>
            <div className={styles.box}></div>
        <div className={styles.enter}>
            {/* <span className={styles.entering}>Name</span>
            <span className={styles.entering}>Email</span>
            <span className={styles.entering}>Upload your fingerprint</span> */}
                <form className={styles.form} onSubmit={handleSubmit}>
                
      <div className={styles.formGroup}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={handleNameChange}  className={styles.box}/>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} />
      </div>

      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
        </div>
        <div className={styles.submit}>Submit
        <Image className={styles.plus}src="/submit.png"width={85} height={30} alt="Fingerprint" />
        </div>
        </div>

        </div>
        <div className={styles.outcircle1}></div>
        <div className={styles.outcircle2}></div>
        <div className={styles.outcircle3}></div>
        <Image className={styles.u2}src="/u2.png"width={195} height={300} alt="Fingerprint" />

    </main>
  );
}
