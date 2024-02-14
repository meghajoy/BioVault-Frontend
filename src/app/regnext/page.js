"use client";
import Image from "next/image";
import styles from "./regnext.module.css";
import { useState } from "react";
import Link from "next/link";

export default function RegNext() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name", name);
    console.log("Email", email);
  };
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  return (
    <main>
      <div className={styles.rect}>
        <Image
          src="/rectnoise.png"
          width={640}
          height={836}
          alt="Fingerprint"
        />

        <div className={styles.bioVault}>
          B<span className={styles.iitalics}>i</span>oVa
          <span className={styles.letteru}>u</span>
          <span className={styles.litalics}>l</span>
          <span className={styles.blackText}>t</span>
        </div>
      </div>
      <div className={styles.circle}>
        <Image
          src="/Ellipse 10.png"
          width={350}
          height={350}
          alt="Fingerprint"
        />
      </div>
      <Image
        className={styles.u5finger}
        src="/u5.png"
        width={348}
        height={360}
        alt="Fingerprint"
      />
      <Image
        className={styles.cufinger}
        src="/CuntPrint.png"
        width={40}
        height={62}
        alt="Fingerprint"
      />
      <span className={styles.register}>Register</span>
      <div className={styles.linesContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              className={styles}
            />
            <i></i>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className={styles}
            />
            <i></i>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phoneNumber" className={styles.label}>
              Phone no.
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              className={styles}
            />
            <i></i>
          </div>
        </form>

        {/* <div className={styles.line}></div>
        <div className={styles.line}> </div>
        <div className={styles.line}></div> */}

        {/* <span className={styles.entering}>Name</span>
          <span className={styles.entering}>Email</span>
          <span className={styles.entering}>Phone no.</span> */}
      </div>
      <div className={styles.outcircle1}></div>
      <div className={styles.outcircle2}></div>
      <div className={styles.outcircle3}></div>

      <div className={styles.boxcontainer}>
        <button className={styles.box}></button>
        {/* <button className={styles.box}></button>
        <button className={styles.box}></button> */}
      </div>
      <span className={styles.entering}>Add your fingerprints</span>

      <div className={styles.pluscontainer}>
        <div>
          {}
          <input
            type="file"
            accept="image/*"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
            <Image
              className={styles.plus}
              src="/plus.png"
              width={24}
              height={24}
              alt="Fingerprint"
            />
          </label>
          {/* <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
            <Image
              className={styles.plus}
              src="/plus.png"
              width={24}
              height={24}
              alt="Fingerprint"
            />
          </label>
          <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
            <Image
              className={styles.plus}
              src="/plus.png"
              width={24}
              height={24}
              alt="Fingerprint"
            />
          </label> */}

          {/* {selectedFile && <p>Selected File: {selectedFile.name}</p>} */}
        </div>
      </div>

      <button type="submit" className={styles.submit}>
        Submit
        <div>
          <Image
            className={styles.plus}
            src="/submit.png"
            width={92}
            height={34}
            alt="Fingerprint"
          />
        </div>
      </button>
    </main>
  );
}
